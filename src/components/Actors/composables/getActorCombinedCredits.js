import axios from 'axios';
import { ref } from 'vue';

const getActorCombinedCredits = () => {
    const actorCombinedCredits = ref({});

    const loadActorCombinedCredits = async (id) => {
        axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                actorCombinedCredits.value = res.data;
                actorCombinedCredits.value.cast.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
            }).catch(err => {
                console.log(err.message);
            });
    }

    return { actorCombinedCredits, loadActorCombinedCredits };
}

export default getActorCombinedCredits;
