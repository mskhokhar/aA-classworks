function binarySearch(array, target) {
    if(array.length < 1) return false;
    
    let mid = Math.floor(array.length/2);
    let middleElement = array[mid];
    if (middleElement === target) return true;
    let leftArray = array.slice(0,mid);
    let rightArray = array.slice(mid+1);
    if (target < middleElement) {
        return binarySearch(leftArray, target);
    } else {
        return binarySearch(rightArray, target);
    }
}

function binarySearchIndex(array, target) {

}


module.exports = {
    binarySearch,
    binarySearchIndex
};