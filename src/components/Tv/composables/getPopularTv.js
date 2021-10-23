import axios from 'axios';
import { ref } from 'vue';

const getPopularTv = () => {
    const popularTv = ref([]);

    const loadPopularTv = () => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                popularTv.value = res.data.results;
            }).catch(err => {
                console.log(err.message);
            });
    }

    return { popularTv, loadPopularTv };
}

export default getPopularTv;
