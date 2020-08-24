const {merge} = require('webpack-merge');
const baseWepbackConfig = require('./webpack.base.conf.js');

const buildWebpackConfig = merge(baseWepbackConfig, {
    mode: 'production',
    plugins: [],
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});