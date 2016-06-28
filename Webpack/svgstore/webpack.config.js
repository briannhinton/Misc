var path = require("path");
var SvgStore = require('webpack-svgstore-plugin');

module.exports = {
  entry: "./main.js",
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
      test: /(\.jsx$|\.js$)/,
      exclude: /(node_modules|bower_components)/,
      loaders: ["react-hot", "babel-loader"]
      }
    ]
  },
  //load plugins
  plugins: [
    new SvgStore(path.join('./svg'), {
      prefix: 'icon-', // add prefix
      svg: {
        style: 'position:absolute; width:0; height:0',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      output: [
        {
          filter: 'all', // to get all svg's
          sprite: './dist/sprite.svg'
        }
      ],
      min: true // default: false
    })
  ]
};
