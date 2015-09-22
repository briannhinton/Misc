// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//   return a.concat(b);
// });
// // flattened is [0, 1, 2, 3, 4, 5]

const numbers = [[0,1],[2,3],[4,5],[6,7]];
const flattened = numbers.reduce((a, b) => a.concat(b));

console.log(flattened); // flattened is [0,1,2,3,4,5,6,7,]
