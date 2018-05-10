/*const webpack = require('webpack');
module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
};*/
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
	template: './src/app/index.html',
	filename: 'index.html',
	inject: 'body'
})
const config = {
	entry: './src/app/app.jsx',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},
		{
			test: /\.scss$/,
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		}]
	},
	plugins: [
		HtmlWebPackPluginConfig
	]
}

module.exports = config;