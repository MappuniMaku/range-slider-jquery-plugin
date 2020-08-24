const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseWepbackConfig = require('./webpack.base.conf.js');

const devWebpackConfig = merge(baseWepbackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWepbackConfig.externals.paths.dist,
        port: 8081,
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
    ],
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
