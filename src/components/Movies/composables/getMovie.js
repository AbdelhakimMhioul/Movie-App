import axios from 'axios';
import { ref } from 'vue';

const getPopularMovies = () => {
  const movie = ref({});
  const movieImages = ref([]);
  const movieVideo = ref({})
  const error = ref("");
  const loading = ref(false);

  const loadMovie = async (id) => {
    loading.value = true;
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&append_to_response=images,videos`)
      .then(res => {
        movieVideo.value = res.data.videos.results[0]
        movie.value = res.data;
        movieImages.value = res.data.images.backdrops.slice(0, 9);
        loading.value = false;
      }).catch(err => {
        error.value = err.message;
        loading.value = false;
      });
  }

  return { movie, movieImages, movieVideo, loading, loadMovie };
}

export default getPopularMovies;
