const path = require('path');
const WebpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const mainConfig = {
    entry: path.resolve(__dirname, './app/main/electron.ts'),
    target: 'electron-main',
    output: {
        filename: 'electron.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'inline-source-map',
    mode: 'development'
}

module.exports = WebpackMerge.merge(baseConfig, mainConfig)








