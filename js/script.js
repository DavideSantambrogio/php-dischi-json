const app = Vue.createApp({
    data() {
        return {
            albums: []
        };
    },
    mounted() {
        axios.get('get_albums.php')
            .then(response => {
                this.albums = response.data;
            })
            
    }
});

app.mount('#app');