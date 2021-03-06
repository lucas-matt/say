var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var STYLE_DIR = path.resolve(__dirname, 'src/client/stylesheets');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
    filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.scss?/,
                include: STYLE_DIR,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }    
};
    
module.exports = config;
