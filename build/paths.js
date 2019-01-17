'use strict'

const path = require('path')

function resolve (...args) {
  return path.resolve(__dirname, '../', ...args)
}

module.exports = {
  htmlTemplate: resolve('public/index.html'),
  distPath: resolve('dist/')
}
