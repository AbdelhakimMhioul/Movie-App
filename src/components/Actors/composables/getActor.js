import axios from 'axios';
import { ref } from 'vue';

const getActor = () => {
    const actor = ref({});

    const loadActor = async (id) => {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                actor.value = res.data;
            }).catch(err => {
                console.log(err.message);
            });
    }

    return { actor, loadActor };
}

export default getActor;
