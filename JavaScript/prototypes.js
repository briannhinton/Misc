/* Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters(numbers),
which it should save to properties of the same name. Give the Vector prototype two methods, plus and minus, that take
another vector as a parameter and return a new vector that has the sum or difference of the two vectors (the one in
this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of the vector- that is, the distance of the
point (x,y) from the origin (0,0). */

// constructor vector
var Vector = function(x, y) {
    var _x = x,
        _y = y;
    this.getX = function() { return _x;};
    this.getY = function() { return _y;};
    this.setX = function(x) { _x = x;};
    this.setY = function(y) { _y = y;};
};

// plus vector prototype
Vector.prototype.plus = function(vect){
    return new Vector(this.x + vect.x, this.y + vect.y);
};

// minus vector prototype
Vector.prototype.minus = function(vect){
    return new Vector(this.x - vect.x, this.y - vect.y);
};

// print
Vector.prototype.print = function(){
    console.log("(" + this.x + ", " + this.y + ")");
};

// getter property length
Object.defineProperty(Vector.prototype, "length", {
    get: function () { return Math.sqrt(this.x*this.x + this.y*this.y); }
});


Object.defineProperty(Vector.prototype, "x", {
    // set to this
    set: function (x) {this.setX(x);},
    // get result
    get: function () {return this.getX();}
});

Object.defineProperty(Vector.prototype, "y", {
    // set to this
    set: function (y) {this.setY(y);},
    // get result
    get: function () {return this.getY();}
});

// apply to vector, and print result to console
(new Vector(1, 2)).plus(new Vector(2, 3)).print(); // Vector{x: 3, y: 5}

// apply to vector, and print result to console
(new Vector(1, 2)).minus(new Vector(2, 3)).print(); // Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length); // 5

var test = new Vector(1, 5);
test.x = 30;
test.a = 52;
test.print();
