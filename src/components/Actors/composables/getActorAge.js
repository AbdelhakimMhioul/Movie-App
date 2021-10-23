import moment from "moment";

const getActorAge = (actor) => {
    return moment(actor['birthday'], "YYYY-MM-DD").fromNow();
}

export default getActorAge;
