const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopent = process.env.NODE.ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production', 
    devtool: isDevelopment ? 'eval-source-map' : 'source-map';
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