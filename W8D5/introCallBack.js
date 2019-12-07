class Clock {
  constructor() {
    // 1. Create a Date object.
    this.date_obj = new Date();
    this.hours = this.date_obj.getHours();
    this.minutes = this.date_obj.getMinutes();
    this.seconds = this.date_obj.getSeconds();
    this._tick();
    // this._tick.bind(this)();
    // this.printTime(this.hours,this.minutes,this.seconds);
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime(h, m, s) {
 
    // Format the time in HH:MM:SS
    let time = `${h}:${m}:${s}`;
    // Use console.log to print it.
    
    console.log(time);
    
  }

  _tick() {
    // 1. Increment the time by one second.
    // console.log(this);
    // let that = this;  
    // setInterval( function() { 
    //   // console.log(that); 
    //   that.seconds = that.seconds + 1; 
    //   that.printTime(that.hours, that.minutes, that.seconds); 
    //   // console.log(seconds);
    // }, 1000)
    // 2. Call printTime.
    setInterval(() => {
      this.seconds = (this.seconds + 1) % 60.0;
      this.printTime(this.hours, this.minutes, this.seconds);
    }, 1000);
    
  }
}

// const clock = new Clock();


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  
   if (numsLeft > 0) {
     reader.question('Give a number: ', (num) => {
      sum += Number.parseInt(num);
      numsLeft--;
      console.log(`${numsLeft} left`)
      console.log(sum);
      addNumbers(sum, numsLeft,completionCallback);
     });
   } else {
     completionCallback(sum);
     reader.close();
   }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


//-------------------------




// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  reader.question(`Is ${el1} > ${el2} ?`, (answer) => {
    // console.log("reached inside askIf");
    // console.log(typeof answer);
    // reader.close();
    if (answer === "true") {
      callback("true");
    } else {
      callback("false");
    }
  });
  // callback if true; else false.
}

// askIfGreaterThan(32,22, function(input){console.log(typeof input);reader.close();});

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan){
      if (isGreaterThan === "true"){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = "true";
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      
    });
  }
}

// innerBubbleSortLoop([1, 2, 3, 4], 0, false, function () {
//   console.log("yessss!! we are in!!!!!");
//   reader.close();
// });

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === "true") {
      innerBubbleSortLoop(arr, 0, "false", outerBubbleSortLoop);
    }else{
        sortCompletionCallback(arr);
    }

  }
  outerBubbleSortLoop("true");
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([0,5,3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });



// Function.prototype.myThrottle(interval){
//     var tooSoon;
//     if(!tooSoon){
//       tooSoon = true;
//       setTimeout(() => {
//         tooSoon = false;
//       }, interval);
//     }

// }

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
const interval = setInterval(() => {
  neuron.fire();
}, 10);

// You can use clearInterval to stop the firing:
clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.Throttle(500);