const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

let config = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "./js"),
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader'],
                })
            }]
    },
    plugins: [
        new ExtractTextWebpackPlugin("../assets/css/styles.css")
    ]
};

module.exports = config;