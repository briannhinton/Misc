class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  ['perimeter']() {
    return (this.width * 2) + (this.height * 2);
  }

  get ['area']() {
    return this.width * this.height;
  }

  * dimensions() {
    yield this.width;
    yield this.height;
  }
}

const r = new Rectangle(3, 5);

console.log(r.perimeter());

console.log(r.area);

for (let x of r.dimensions()) {
  console.log(x);
}
