const path = require('path');
const Webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = _ => ({
	// Entry
	entry: './src/index.js',

	// Output
	output: {
		filename: '[hash].bundle.js',
		path: path.resolve(__dirname, 'public'),
	},

	// Module
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},

			{
				test: /\.(css|sass|scss)$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},

			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				exclude: /node_modules/,
				use: ['file-loader']
			},
		]
	},

	// Plugins
	plugins: [
		new Webpack.ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: './src/index.html'
		})
	],

	// Devtool
	devtool: 'source-map',

	// Development Server
	devServer: {}

});