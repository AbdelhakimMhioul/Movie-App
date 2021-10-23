import axios from 'axios';
import { ref } from 'vue';

const getTopRatedShows = () => {
    const topRatedShows = ref([]);

    const loadTopRatedShows = () => {
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                topRatedShows.value = res.data.results;
            }).catch(err => {
                console.log(err.message);
            });
    }

    return { topRatedShows, loadTopRatedShows };
}

export default getTopRatedShows;
