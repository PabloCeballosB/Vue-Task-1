const app = Vue.createApp({
    data() {
        return {
            name: 'Pablus',
            age: 24,
            img: 'https://lenguajejs.com/vuejs/introduccion/que-es-vue/vuejs.png'
        };
    },
    methods: {
        edadMasCinco(){
            return this.age + 5;
        },

        numAleatorio() {
            const randomNumber = Math.random();
            return randomNumber.toFixed();
        }
    }
}); 

app.mount('#assignment');

