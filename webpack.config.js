var path = require('path');

module.exports = {
  entry: {
    app: [
      path.join(__dirname, 'src/app.js'),
      path.join(__dirname, 'src/app.css')
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer']
      }
    ]
  }
};
