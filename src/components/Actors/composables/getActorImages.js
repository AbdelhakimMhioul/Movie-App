import axios from 'axios';
import { ref } from 'vue';

const getActorImages = () => {
  const actorImages = ref({});

  const loadActorImages = async (id) => {
    axios.get(`https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.VUE_APP_API_KEY}`)
      .then(res => {
        actorImages.value = res.data.profiles.slice(0, 5);
      }).catch(err => {
        console.log(err.message);
      });
  }

  return { actorImages, loadActorImages };
}

export default getActorImages;
