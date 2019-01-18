'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');

const phaserModulePath = path.resolve(__dirname, '../node_modules/phaser-ce/');
const phaser = path.join(phaserModulePath, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModulePath, 'build/custom/pixi.js');
const p2 = path.join(phaserModulePath, 'build/custom/p2.js');
const dragonBones = path.resolve(__dirname, '../src/thirdparty/dragonBones.js');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/index.ts'),
    // vendor: ['pixi', 'p2', 'phaser-ce']
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'phaser-ce': phaser,
      'pixi': pixi,
      'p2': p2,
      'dragon-bones': dragonBones
    }
  },
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
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      { test: /\.js$/, use: ['babel-loader'] },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] },
      // { test: /dragonBones\.js/, use: ['expose-loader?dragonBones'] }
    ]
  }
}
