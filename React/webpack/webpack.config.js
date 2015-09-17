var path = require('path');
var webpack = require('webpack');

module.exports =
{
	entry:
	[
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./entry.jsx' // Your appʼs entry point
	],
    output:
	{
        path: __dirname,
        filename: "bundle.js"
    },
    module:
	{

    loaders:
		[
	    	{ test: /(\.jsx$|\.js$)/, loaders: ['react-hot', "babel?optional[]=runtime&stage=0"], exclude: /node_modules/ },
	    	{ test: /\.css$/, loader: "style!css", exclude: /node_modules/ }
        ],
  
		devServer:
		{
			hot: true,
			inline: true,
			progress: true,
			colors: true
		}
    },
	plugins:
	[
		new webpack.HotModuleReplacementPlugin()
	]
};
