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
    if(array.length < 1) return -1;
    let mid = Math.floor(array.length/2);
    let middleElement = array[mid];
    if (middleElement === target) return mid;
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid + 1);
    if (target < middleElement) {
        return binarySearchIndex(leftArray, target);
    } else {
        let res = binarySearchIndex(rightArray, target);
        return  res === -1 ? -1 : res + mid + 1  ;
    }
}

let test = [3,4,5,6,7,22,25,65,45];
binarySearchIndex(test,22);


module.exports = {
    binarySearch,
    binarySearchIndex
};