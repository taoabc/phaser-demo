'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const paths = require('./paths')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.htmlTemplate
    }),
    new CopyWebpackPlugin(['resource/**/*'])
  ],
  devServer: {
    contentBase: paths.distPath,
    // publicPath: 'dist',
    compress: true,
    port: 9000
  }
}
