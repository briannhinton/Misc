import React from 'react';

var RootComponent = require('./testComponent.jsx');

// When you render it, assign it to a variable
var rootInstance = React.render(RootComponent(), document.body);

require('./style.css');

// Then just copy and paste this part at the bottom of
// the file
if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
