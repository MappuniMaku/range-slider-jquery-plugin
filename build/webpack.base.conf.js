const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../docs')
};

module.exports = {
    externals: {
        paths: PATHS,
    },
    context: PATHS.src,
    mode: 'development',
    entry: {
        main: './index.ts'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: PATHS.dist
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.pug'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery",
        }),
        new MiniCssExtractPlugin({
            filename: `[name].[hash].css`,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.s?[ac]ss$/,
                    use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {publicPath: '../../'},
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: {path: `./postcss.config.js`}, },
                    },
                    {
						loader: 'resolve-url-loader',
						options: {}
					},
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ],
            },
        ]
    },
    devServer: {
        port: 4200
    }
};