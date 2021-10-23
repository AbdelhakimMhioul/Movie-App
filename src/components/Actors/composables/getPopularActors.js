import axios from 'axios';
import { ref } from 'vue';

const getPopularActors = () => {
    const popularActors = ref([]);
    const loading = ref(false);
    let page = 0;

    const loadPopularActors = () => {
        page++;
        loading.value = true;
        if (page < 1000) {
            axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.VUE_APP_API_KEY}&page=${page}`)
                .then(res => {
                    res.data.results.forEach(result => {
                        popularActors.value.push(result);
                    });
                    loading.value = false;
                }).catch(err => {
                    console.log(err.message);
                    loading.value = false;
                });
        }
    }

    return { popularActors, loading, loadPopularActors };
}

export default getPopularActors;
