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
  }
};
