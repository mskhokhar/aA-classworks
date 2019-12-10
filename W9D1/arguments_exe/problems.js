function sum(){
  let args = Array.from(arguments);
  let sum = 0;
  args.forEach(el => { 
    sum += el;
  });
  return sum;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 7, 5) === 15);

function sumSplat(...args){
  let sum = 0;
  args.forEach(el => {
    sum += el;
  });
  return sum;
}
// func.myBind(ctx, ...bindArgs) <= return a BOUND function 

// console.log(sumSplat(1, 2, 3, 4) === 10);
// console.log(sumSplat(1, 2, 3, 4, 5) === 15);

//callback = this;
//bindArgs.callback(callargs)


Function.prototype.myBind_1 = function (){
  let bindArgs;
  let context;
  if(arguments.length > 1){
    context = arguments[0];
    let args = Array.from(arguments); 
    bindArgs = args.slice(1);
  }else{
    context = arguments[0];
    bindArgs = [];
  }
  let that = this;
  return function () {
    let callargs = bindArgs.concat(Array.from(arguments));
    that.apply(context, callargs);
  };

}

Function.prototype.myBind = function (...outer_args) {
  let bindArgs;
  let context;
  if (outer_args.length > 1) {
    context = outer_args[0];
    bindArgs = outer_args.slice(1);
  } else {
    context = outer_args[0];
    bindArgs = [];
  }
  let that = this;
  return function (...inner_args) {
    let callargs = bindArgs.concat(inner_args);
    that.apply(context, callargs);
  };

}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

const curriedSum = function (numArgs) {
  let numbers = [];
    return function _curriedSum(params) {
      numbers.push(params);
      if (numArgs === numbers.length){
        let sum = 0;
        numbers.forEach(el => {
          sum += el;
        });
        return sum;
       
      }else{
        return _curriedSum;
      }
    };
  
};

// const sum_1 = curriedSum(4);
// console.log(sum_1(5));
// console.log(sum_1(30));
// console.log(sum_1(20));
// console.log(sum_1(1));

Function.prototype.curry = function(numArgs){
  let numbers = [];
  let that = this;
  return function _curriedSum(params) {
    numbers.push(params);
    if (numArgs === numbers.length) {
      // return that.apply(that, numbers);
      return that(...numbers);
    } else {
      return _curriedSum;
    }
  };
}

function sumThree(num1, num2, num3) {
  return (num1 + num2 + num3);
}

// let f1 = sumThree.curry(3); 
// f1 = f1(4); 
// f1 = f1(20); 
// console.log(f1(6));