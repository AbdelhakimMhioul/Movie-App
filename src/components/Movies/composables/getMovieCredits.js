import axios from 'axios';
import { ref } from 'vue';

const getMovieCredits = () => {
  const movieCasts = ref([]);
  const movieCrew = ref([]);

  const loadMovieCredits = async (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.VUE_APP_API_KEY}`)
      .then(res => {
        movieCasts.value = res.data.cast.slice(0, 5);
        movieCrew.value = res.data.crew.slice(0, 2);
      }).catch(err => {
        console.log(err.message);
      });
  }

  return { movieCasts, movieCrew, loadMovieCredits };
}

export default getMovieCredits;
