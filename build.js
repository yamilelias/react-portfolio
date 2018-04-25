const merge = require('webpack-merge');
const base = require('./scripts/webpack.base.js');
const build = require('./scripts/webpack.build.js');

const env = 'production';
module.exports = merge(base(env), build(env, {
  bundleAnalyzerPlugin: true,
  splitChunks: false,
}));