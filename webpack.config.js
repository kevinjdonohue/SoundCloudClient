const path = require('path');
const webpack = require('webpack');

module.exports = {
  // entry: [
  //   'webpack-dev-server/client?http://localhost:8080',
  //   'webpack/hot/only-dev-server',
  //   './src/index.jsx',
  // ],
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        // loader: 'react-hot-loader/webpack!babel-loader',
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
