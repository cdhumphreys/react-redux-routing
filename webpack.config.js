var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var src_dir = path.resolve(__dirname, 'src/');
var dist_dir = path.resolve(__dirname, 'dist/');

var config = {
	entry: [
		__dirname + '/src/index.js',
		'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
        ],

	output: {
		path: dist_dir,
		publicPath: '/static/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'stage-0','es2015']
				}
			},
			// {
			// 	test: /\.css$/,			
			// 	loader: ExtractTextPlugin.extract('style-loader','css-loader'),
			// 	include: src_dir
			// },
			{
				test: /\.scss$/,				
				loader: ExtractTextPlugin.extract('css!sass'),								
				include: src_dir
			}
		]
	},	
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('stylesheet.css')
	],
	devtool: 'source-map',
	devServer: {
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		contentBase: './'
		
	}
	
};

module.exports = config;