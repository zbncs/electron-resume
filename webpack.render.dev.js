const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const renderConfig = {
    entry: {
        index: path.resolve(__dirname, './app/render/app.tsx')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    },
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'electron-renderer',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        host: '127.0.0.1',
        port: '7001',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './app/render/index.html'),
            filename: path.resolve(__dirname, './dist/index.html'),
            chunks: ['index']
        })
    ]

}

console.log(__dirname)

module.exports = WebpackMerge.merge(baseConfig, renderConfig);







