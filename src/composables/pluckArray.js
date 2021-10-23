const pluckArray = (array, key) => {
    if (array) {
        return array.map((o) => o[key]).join(', ');
    }
    return [];
};

export default pluckArray;
