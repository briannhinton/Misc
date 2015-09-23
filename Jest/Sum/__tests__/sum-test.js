jest.dontMock('../sum'); // Tells Jest not to Mock

describe('sum', function(){ // Describes a set of tests
  it('adds val x and y', function(){ // This test does:
    var sum = require('../sum'); // imports
    expect(sum(3,2)).toBe(5);
  });

});
