function radixSort(arr) {
    if (!Array.isArray(arr)) return null;
    let maxDigits = getMaxDigits(arr);

    for (let i = 0; i < maxDigits; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        
        for (let j = 0; j < arr.length; j++) {
            let digit = digitAtPlace(arr[j],i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets)
    }
    return arr;
}
function getIntLength(num) {
    return num.toString().length
}
function getMaxDigits(array) {
    let maxLength = 0;
    for (let i = 0; i < array.length; i++) {
        maxLength = Math.max(maxLength, getIntLength(array[i]))
    }
    return maxLength;
}
function digitAtPlace(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

module.exports = {
    radixSort
};