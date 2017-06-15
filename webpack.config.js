const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        web: './src/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'wireworld.js',
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2017']
                }
            }
        ]
    },
    plugins: [
    ]
};
