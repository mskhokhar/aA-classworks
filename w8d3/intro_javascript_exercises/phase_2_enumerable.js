Array.prototype.myEach = function myEach(callback) {
  let array = this;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    callback(element);
  }
  return undefined;
}

function square(number) {
  // let number = this;
  return number * number;
}

// let input_1 = [1, 2, 3, 4];
// input_1.myEach(square);

Array.prototype.myMap = function myMap(callback) {
  let array = this;
  let res = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    res.push(callback(element));
  }
  return res;
}

let input_1 = [1, 2, 3, 4];
console.log(input_1.myMap(square));

Array.prototype.myMap = function myMap(callback) {
  let res = []
  this.myEach(function (el) {
    res.push(callback(el));
  });
  return res;
}




Array.prototype.myReduce = function myReduce(callback, something) {
  if (something === undefined) {
    let acc = this[0];
    this.slice(1).myEach(function (el) {
      acc = callback(acc, el);
    });
    return acc; 
  }

  else {
    this.myEach(function (el) {
      something = callback(something, el);
    });
    return something
  }
 
}