var path = require('path');

module.exports = {
  context: path.resolve('js'),
	entry: './app.js',
	output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
  	filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: 'public'
  },
  resolve: {
    extensions: ['', '.js']
  },
  watch: true
}
