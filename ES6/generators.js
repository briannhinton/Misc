const foo = function* (x) {
  yield console.log("here");
  yield x;
}

const bar = foo(2); // No console output here

bar.next(); // outputs "here"
console.log(bar.next()); // outputs {"value":2,"done":false}
console.log(bar.next()); // outputs {"done":true}
