import moment from "moment";

const formatDate = (value) => {
    return moment(String(value)).format("ll");
};

export default formatDate;
