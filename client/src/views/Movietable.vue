<template>
    <v-app>
        <v-row class="d-flex flex-wrap justify-center">
            <v-data-table :items='movies'></v-data-table>
        </v-row>
    </v-app>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        movies: [],
        
    }),
    async created() {
        let response = await axios.get('http://localhost:3000/movies');
        this.movies = response.data;
        console.log(this.movies);
        console.log(this.response);
    }
}    
</script>