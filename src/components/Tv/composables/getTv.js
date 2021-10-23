import axios from 'axios';
import { ref } from 'vue';

const getTv = () => {
    const tvshow = ref({});
    const tvshowCredits = ref({});
    const tvVideoKey = ref("");
    const tvImages = ref([]);

    const loadTv = (id) => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.VUE_APP_API_KEY}&append_to_response=videos,images,credits`)
            .then(res => {
                console.log(res.data);
                tvshow.value = res.data;
                tvshowCredits.value = res.data.credits;
                tvImages.value = res.data.images.backdrops.slice(0, 9);
                tvVideoKey.value = res.data.videos.results[0] ? res.data.videos.results[0].key : null;
            }).catch(err => {
                console.log(err.message);
            });
    }

    return { tvshow, tvshowCredits, tvVideoKey, tvImages, loadTv };
}

export default getTv;
