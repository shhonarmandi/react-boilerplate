/* eslint-disable @typescript-eslint/no-var-requires */

const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
	},
	optimization: {
		chunkIds: 'size',
		moduleIds: 'size',
		mangleExports: 'size',
		mangleWasmImports: true,
		removeAvailableModules: false,
		runtimeChunk: {
			name: 'runtime',
		},
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
		}),
	],
})
