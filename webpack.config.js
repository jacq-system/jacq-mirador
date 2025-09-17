const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        "main.min": "./src/index.js",
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({ //disable code splitting
            maxChunks: 1
        })
    ]
};
