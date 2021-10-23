import axios from 'axios';
import { ref } from 'vue';

const getNowPlayingMovies = () => {
    const nowPlayingMovies = ref([]);
    const error = ref("");
    const loading = ref(false);

    const loadNowPlayingMovies = async () => {
        loading.value = true;
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                loading.value = false;
                nowPlayingMovies.value = res.data.results;
            }).catch(err => {
                loading.value = false;
                error.value = err.message;
            });
    }

    return { nowPlayingMovies, loading, loadNowPlayingMovies };
}

export default getNowPlayingMovies;
