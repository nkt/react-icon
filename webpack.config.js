module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: './public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?stage=2&loose=true'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer']
      }
    ]
  }
};
