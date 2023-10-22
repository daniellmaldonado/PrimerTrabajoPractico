const { createApp } = Vue


createApp({
    data() {
        return {
            url: "https://apisimpsons.fly.dev/api/personajes?limit=20&page=2",
            error: false,
            datos: {}
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.datos = data.docs;
                });
                }

    },

        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')


