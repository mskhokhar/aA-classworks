function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let currElement = array[i];
        for (var j = i-1; j>=0 && currElement<array[j]; j--) {
            array[j+1] = array[j]
        }
        array[j+1] = currElement;
    }
    return array;
}

module.exports = {
    insertionSort
};