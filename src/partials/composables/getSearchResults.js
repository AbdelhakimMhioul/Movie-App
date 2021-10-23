import axios from 'axios';
import { ref } from 'vue';

const getSearchResults = () => {
    const searchResults = ref([]);
    const loading = ref(false);

    const loadSearchResults = (search) => {
        loading.value = true;
        if (search.length > 2) {
            axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.VUE_APP_API_KEY}&query=${search}`)
                .then(res => {
                    console.log(res.data.results)
                    loading.value = false;
                    searchResults.value = res.data.results;
                }).catch(err => {
                    loading.value = false;
                    console.log(err);
                });
        } else {
            searchResults.value = [];
        }
    }

    return { searchResults, loading, loadSearchResults };
}

export default getSearchResults;
