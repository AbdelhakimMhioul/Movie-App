const sliceArray = (array, begin, end) => {
    if (array) {
        return array.slice(begin, end);
    }
    return [];
}

export default sliceArray;
