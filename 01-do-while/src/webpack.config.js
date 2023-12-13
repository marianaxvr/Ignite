const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output:{
        path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx'],
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
    module:{
        rules: [
        {
            test: /\.jsx$/, 
            exclude: /node_modules/,
            use: 'babel-loader'
        }
        ],
    },
};