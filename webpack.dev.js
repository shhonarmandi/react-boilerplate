const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
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
});
