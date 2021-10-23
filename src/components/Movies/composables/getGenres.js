import axios from 'axios';
import { ref } from 'vue';

const getGenres = () => {
    const genres = ref([]);

    const loadGenres = async () => {
        await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}`
        ).then(res => {
            genres.value = res.data.genres;
        });
    }

    return { genres, loadGenres };
}

export default getGenres;
