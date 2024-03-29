const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {HashedModuleIdsPlugin} = require('webpack');
const ScriptExtphpWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = merge(common, {
    entry: {
        main: ["@babel/polyfill", "./src/chunks/main.js"],

    },
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'web/build/'),
        publicPath: '/build/'
    },
    plugins: [

        new CleanWebpackPlugin(),


        new MiniCssExtractPlugin({
            chunks: ['main'],
            filename: "css/[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }),


        new HtmlWebpackPlugin({
            chunksSortMode: "manual",
            chunks: ['main'],
            filename: path.resolve(__dirname, 'web/index.html'),
            template: path.resolve(__dirname, 'src/index.html'),

            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
                removeScriptTypeAttributes: true,
            },
            inject: true,
            inlineSource: 'runtime',
            prefetch: false,
            preload: ['**/*.css'],

        }),




        new HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 10,
        }),
        new ScriptExtphpWebpackPlugin({
            defaultAttribute: 'async'
        }),


    ],
});
