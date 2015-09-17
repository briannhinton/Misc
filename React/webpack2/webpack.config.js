var webpack = require('webpack');
var path = require('path');

var config = {
  entry: ['webpack/hot/dev-server', './app.js'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,

      // Use the property "loaders" instead of "loader" and
      // add "react-hot" in front of your existing "jsx" loader
      loaders: ['react-hot', 'babel']
    }]
  }
};

module.exports = config;
