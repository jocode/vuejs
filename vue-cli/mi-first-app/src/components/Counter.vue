<template>
    <h2>{{ customTitle }}</h2>
    <p>{{ count }} <sup>2</sup> = {{ squareValue }}</p>

    <p>
        <button v-on:click="decrement">-</button>
        <button @click="increment">+</button>
    </p>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 0,
            // required: true
            validator(value) {
                return value >= 0
            }
        }
    },
    name: 'Counter',
    data() {
        return {
            count: this.start
        }
    },

    methods: {
        increment() {
            this.count++
        },

        decrement() {
            if (this.count == 0) 
                return
            this.count--
        }
    },

    computed: {
        squareValue: function() {
            console.log('Computed squareValue')
            return this.count * this.count
        },

        customTitle() {
            return this.title || 'Counter'
        }
    },
}
</script>

<style>
    button {
        background: #eee;
        border-radius: 4px;
        border: 1px solid #999;
        cursor: pointer;
        font-weight: bold;
        margin: 0 5px;
        padding: 5px 10px;
    }

    button:hover {
        background-color: #ddd;
        transition: 0.3s ease-in-out;
    }
</style>