const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/, 
        use: {
          loader: 'css-loader',
        } 
      }
    ]
  },
  devServer: {
    historyApiFallback: true 
  }
}

module.exports = config