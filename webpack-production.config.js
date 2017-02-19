let devConfig = require('./webpack.config.js');
let WebpackStrip = require('strip-loader');
let stripLoader = {
  test: [/\.js$/],
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
