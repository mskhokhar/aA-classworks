// Array#uniq - returns a new array containing each individual element of the original array only once(creating all unique elements)
// the elements should be in the order in which they first appear in the original array
// should not mutate the original array
//   ([1, 2, 2, 3, 3, 3].uniq() => [1, 2, 3])
// Array#twoSum - returns an array of position pairs where the elements sum to zero
// Array#transpose - where we have a two - dimensional array representing a matrix.returns the transpose
// should not mutate the original array


Array.prototype.uniq = function uniq(abc) { 
  const res = [];
  let array = this;
  for (let i = 0; i < array.length; i++) {
    if (!res.includes(array[i])) {
      res.push(array[i]);
      res.push(abc);
    }
  }
  return res;
}

// var input = [1, 2, 3, 6, 7, 4, 4, 8];
// console.log(input.uniq(12)); // In JS we don't pass the arguments directly to the pre defined class functions ; console.log is puts

Array.prototype.twoSum = function twoSum() {
  const res = [];
  let array = this;
  for (let i = 0; i < array.length - 1; i++) {
    const element_1 = array[i];
     for (let j = i+1; j < array.length; j++) {
       const element_2 = array[j];
       if (element_1 + element_2 === 0) {
         res.push([i, j]);
       }
     }
  }
  return res;
}

console.log([4, 5, 8, -4, -5, 10, 12].twoSum());


Array.prototype.transpose = function transpose() {
  const res = [];
  let array = this;
  for (let i = 0; i < array.length; i++) {
      let temp = [];
      for (let j = 0; j < array.length; j++) {
          temp.push(array[j][i]);
      }
    res.push(temp);
  }
  return res;
}

let input = [[1,2,3,], [4,5,6], [7,8,9]];
console.log(input.transpose());