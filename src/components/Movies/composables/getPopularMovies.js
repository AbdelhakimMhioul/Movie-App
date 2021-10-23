import axios from 'axios';
import { ref } from 'vue';

const getPopularMovies = () => {
  const popularMovies = ref([]);
  const loading = ref(false);
  let page = 0;

  const loadPopularMovies = async () => {
    page++;
    loading.value = true;
    if (page < 1000) {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&page=${page}`)
        .then(res => {
          res.data.results.forEach(result => {
            popularMovies.value.push(result);
          });
          loading.value = false;
          console.log(loading.value)
        }).catch(err => {
          console.log(err.message);
          loading.value = false;
        });
    }
  }

  return { popularMovies, loading, loadPopularMovies };
}

export default getPopularMovies;
