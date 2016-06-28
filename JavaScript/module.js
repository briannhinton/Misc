var shapes = (function() {
  var rShapes = {};
  // array of shapes
  var shapeTypes = ['square', 'circle', 'rectangle', 'triangle'];
  var square = {shapeType: }

  rShapes.getTypes = function(){
    return shapeTypes;
  };

  // get a specific shape
  rShapes.getInstance = function(shapeType) {
    var shapeInstance = {};
    // validate parameter
    // if type is not valid check with -1 set shapeType to first in array
    shapeTypes.indexOf(shapeType) === -1 &&
      (shapeType = shapeTypes[0]);

    shapeInstance.shapeType = shapeType;
    return shapeInstance;
  };

  return rShapes;
})();

console.log(shapes);
console.log(shapes.getTypes());
console.log(shapes.getInstance('circle'));

// Build an animal module.
// Dog is an animal.
// Dog can speak. A property.
// Type of animals.

/* Module called animal
Types [dog, cat, fish, bird]
getInstance // returns an instance of animal (a prototype) a specific type of prototype of dog
function on dog class that say speak. returns dog = woof, cat = meow, etc.
// Possible functions
can speak is a function
can wag tail is a function
move()
return walk walk swim fly
can walk function
can swim
animalCount() // everytime you create an animal you increment the count
*/
