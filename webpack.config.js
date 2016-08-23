var
	path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./source'
	],
	output: {
		path: path.join(__dirname, 'application'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.evn.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		new ExtractTextPlugin('styles.css'),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './source/templates/index.html',
			inject: false
		})
	],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel-loader'],
				include: [
					path.resolve(__dirname, 'source')
				],
				plugins: ['transform-runtime']
			},
			{
				test: /\.js$/,
				loaders: ['eslint'],
				include: [path.resolve(__dirname, 'source')]
			}
		],
		loaders: [
			{
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass!import-glob')
			}
		]
	},
	devtool: 'inline-source-map'
}
