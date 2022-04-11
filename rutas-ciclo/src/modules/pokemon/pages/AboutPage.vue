<template>
    <h1>About Page</h1>
    <hr>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">
        Cambiar nombre
    </button>
</template>

<script>
import { onUnmounted } from '@vue/runtime-core';
export default {

    data() {
        return {
            name: 'jocode'
        }
    },

    methods: {
        onChangeName() {
            this.name = 'Johan Camilo';
        }
    },

    beforeCreate() {
        console.log('AboutPage.beforeCreate()');
    },
    created() {
        // Hacer peticiones HTTP
        console.log('AboutPage.created()');
    },
    beforeMount() {
        console.log('AboutPage.beforeMount()');
    },
    mounted() {
        console.log('AboutPage.mounted()');
    },
    beforeUpdate() {
        console.log('AboutPage.beforeUpdate()');
    },
    updated() {
        console.log('AboutPage.updated()');
    },
    activated() {
        console.log('AboutPage.activated()');
    },
    deactivated() {
        console.log('AboutPage.deactivated()');
    },
    beforeUnmount() {
        /**
         * Util para hacer limpieza
         */
        console.log('AboutPage.beforeUnmount()');
    },
    onUnmounted() {
        console.log('AboutPage.onUnmounted()');
    },
    errorCaptured() {
        console.log('AboutPage.errorCaptured()');
    },
    renderTracked() {
        console.log('AboutPage.renderTracked()');
    },
    renderTriggered() {
        console.log('AboutPage.renderTriggered()');
    },

}
</script>
