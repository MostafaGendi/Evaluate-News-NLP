const path = require("path")
const webpack = require("webpack")
const validUrl = require('valid-url')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: '/src/client/index.js',
  output: {
       libraryTarget: 'var',
       library: 'Client'
   },
   optimization: {
  minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  mode:'development',
  devtool:'source-map',
  module: {
          rules: [
                  {
              test: '/\.js$/',
              exclude: /node_modules/,
              loader: "babel-loader"
            },
            {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
            }
          ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template:"./src/client/views/index.html",
      filename:"index.html",
    }),
    new CleanWebpackPlugin({
              // Simulate the removal of files
              dry: true,
              // Write Logs to Console
              verbose: true,
              // Automatically remove all unused webpack assets on rebuild
              cleanStaleWebpackAssets: true,
              protectWebpackAssets: false
      }),
      new MiniCssExtractPlugin({ filename: "[name].css" })
  ]
}
