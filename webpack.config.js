const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WebpackOnDemand = require('webpack-on-demand').default;
const path = require('path');

const wodPluginInstance = new WebpackOnDemand();

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    before: wodPluginInstance.serverBootstrap,
    overlay: true,
    hotOnly: true,
  },
  resolve: {
    plugins: [
      wodPluginInstance,
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    })
  ]
};
