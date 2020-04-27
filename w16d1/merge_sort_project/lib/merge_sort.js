function merge(array1, array2) {
    let result = [];
    while (array1.length && array2.length) {
        let ele1 = array1[0];
        let ele2 = array2[0];
        if (ele1 < ele2) {
            result.push(array1.shift());
        } else {
            result.push(array2.shift())
        }
    }
    return [...result, ...array1, ...array2]
}

function mergeSort(array) {
    if(array.length <= 1) return array;

    let midIdx = Math.floor(array.length/2);
    let leftHalf = array.slice(0, midIdx)
    let rightHalf = array.slice(midIdx)
    let leftSorted = mergeSort(leftHalf);
    let rightSorted = mergeSort(rightHalf);

    return merge(leftSorted,rightSorted);


}

module.exports = {
    merge,
    mergeSort
};