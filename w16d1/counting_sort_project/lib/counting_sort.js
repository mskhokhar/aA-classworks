function countingSort(arr, max) {
    let result = [];
    let counter = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        counter[element]++;
    }
    for (let i = 0; i < counter.length; i++) {
        let element = counter[i];
        while(element > 0){
            result.push(i);
            element--;
        }
    }
    return result;
}


module.exports = {
    countingSort
};