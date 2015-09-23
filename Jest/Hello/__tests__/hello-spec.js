jest.dontMock('../Hello');

describe('Hello', function() {
  it('should have hello world text', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Hello = require('../Hello');
    var hello = TestUtils.renderIntoDocument(<Hello />);
    expect(React.findDOMNode(hello).textContent).toEqual('hello world');
    console.log(hello);
  });
});
