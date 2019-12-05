Array.prototype.substrings = function () {
  let string = this;
  let res = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
       res.push(string.slice(i,j + 1));
      }
  }
  return res;
}