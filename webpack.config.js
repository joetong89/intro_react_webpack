const path = require('path');

module.exports = {
    // this is where we'll configure Webpack!
    entry: './src/app.js',
    output: {
    	path: path.join(__dirname, 'public'),
    	filename: 'bundle.js'
    },
    module: {
    	rules: [{
    		loader: 'babel-loader',
    		test: /\.js$/,
    		exclude: /node_modules/,
    	},
    	{
    		test: /\.s?css$/,
    		use: [
    			'style-loader',
    			'css-loader',
    			'sass-loader',
    		]
    	}
    	],
    },
    devtool: 'cheap-module-val-source-map',
    devServer: {
    	contentBase: path.join(__dirname, 'public')
    }

};
