<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>

      <div>
        <button 
          class="btn btn-danger mx-2" 
          @click="onDeleteEntry"
          v-if="entry.id">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
      </div>

      <div>
        <input 
          type="file"
          @change="onSelectedImage"
          ref="imageSelector"
          v-show="false"
          accept="image/png, image/jpeg">

        <button class="btn btn-primary" @click="onSelectImage">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text"></textarea>
    </div>

    <img
      v-if="entry.picture && !localImage"
      :src="entry.picture"
      alt="entry-picture"
      class="img-thumbnail"
    />

    <img
      v-if="localImage"
      :src="localImage"
      alt="entry-picture"
      class="img-thumbnail"
    />

  </template>

  <Fab @on:click="saveEntry" icon="fa-save" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";

import getDayMonthYear from "../helpers/getDayMonthYear";
import uploadImage from "../helpers/uploadImage";

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/FabButton.vue")),
  },

  data() {
    return {
      entry: null,
      localImage: null,
      file: null
    };
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),

     loadEntry() {
      let entry;
      if (this.id == 'new'){
        entry = {
          text: '',
          date: new Date().getTime(),
        }
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }

      this.entry = entry;
    },

    async saveEntry() {
        new Swal({
          title: 'Espere por favor',
          allowOutsideClick: false,
        })
        Swal.showLoading()

        if (this.file){
          const picture = await uploadImage(this.file)
          console.log(picture)
          this.entry.picture = picture
        }
        

        if (this.entry.id){
          // Acción del Journal Module
          await this.updateEntry(this.entry)
        } else {
          // Crear una nueva entrada
          console.log("Crear una nueva entrada");
          const entryId = await this.createEntry(this.entry)

          this.$router.push({ name: "entry", params: { id: entryId } });          
        }

        Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')
        this.file = null
        this.localImage = null
    },

    async onDeleteEntry() {
      const {isConfirmed} = await Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrarlo!',
        cancelButtonText: 'Cancelar',
      });

      if (isConfirmed){
        Swal.showLoading()
        await this.deleteEntry(this.entry);
        this.$router.push({ name: "no-entry" });

        Swal.fire('Borrado', 'Entrada borrada con éxito', 'success')
      }
    },

    onSelectedImage(event) {
      const file = event.target.files[0];

      if (!file) {
        this.localImage = null
        this.file = null
        return
      }

      this.file = file;
      /**
       * Carga de la imagen
       */
      const reader = new FileReader();
      reader.onload = (e) => {
        this.localImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    onSelectImage() {
      this.$refs.imageSelector.click();
    }

  },

  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },

  created() {
    // console.log(this.$route.params.id);
    this.loadEntry();
  },

  watch: {
    id(/* value, oldValue  */) {
      // console.log({value, oldValue});
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 100px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>