import axios from 'axios';
import { ref } from 'vue';

const getActorExternals = () => {
    const social = ref({});

    const loadActorExternals = async (id) => {
        axios.get(`https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                social.value = res.data;
            }).catch(err => {
                console.log(err.message);
            });
    }

    return { social, loadActorExternals };
}

export default getActorExternals;
