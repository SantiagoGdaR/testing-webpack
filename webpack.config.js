var path = require('path');

module.exports = {
  context: path.resolve('js'),
	entry: './app',
	output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
  	filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    contentBase: 'public'
  },
  resolve: {
    extensions: ['*', '.js']
  },
  watch: true
}
