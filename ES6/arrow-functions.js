// const a = 2;
//
// const multiply = function (num) {
//   return num * a;
// }.bind(this);
//
// console.log(multiply(3))

// Can be written as:

// define variable const
const a = 2;

// define variable for function that multiplies and returns num arg * a
const multiply = num => num * a;

// log the result for arg 3
console.log(multiply(3))
