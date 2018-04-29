module.exports = {
  mode: 'production',
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(svg|gif|png|eot|woff|woff2|ttf)$/,
        use: [
          'url-loader'
        ]
      }
      // {
      //   test: /\.js$/,
      //   use: [
      //     'babel-loader?presets[]=es2015'
      //   ]
      // }
    ]
  }
}
