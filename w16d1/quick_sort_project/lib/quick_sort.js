function quickSort(array) {
    if(array.length <=1) return array;

    let pivot = array.shift();
    let leftArray = array.filter( el => el < pivot );
    let rightArray = array.filter( el => el >= pivot );
    let sortedLeft = quickSort(leftArray);
    let sortedRight = quickSort(rightArray);

    return sortedLeft.concat(pivot).concat(sortedRight)
}


module.exports = {
    quickSort
};