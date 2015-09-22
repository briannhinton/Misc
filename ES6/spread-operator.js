const foo = new Set().add(1).add(2);

console.log(...foo); // 1 2

const bar = new Map().set("a", 1).set("b", 2);

console.log(...bar); // ["a", 1] ["b", 2]
