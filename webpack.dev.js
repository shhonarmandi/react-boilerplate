const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].js',
		pathinfo: false,
	},
	devtool: 'eval-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 9000,
		server: {
			type: 'https',
			options: {
				minVersion: 'TLSv1.3',
			},
		},
		hot: true,
		compress: true,
		historyApiFallback: true,
		watchFiles: ['public/**/*'],
	},
	optimization: {
		runtimeChunk: true,
		splitChunks: false,
		removeEmptyChunks: false,
		removeAvailableModules: false,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
});
