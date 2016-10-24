'use strict'

const _ = require('ninjs-lodash')
const rjs = require('../')

const KEY = 'app'
const TEMP = _.path.resolve(__dirname, '..', 'temp')
const SRC = _.path.join(TEMP, KEY, 'js')
const DEST = _.path.join(TEMP, KEY, 'public', 'js', 'scripts.js')

module.exports = {}

// App
rjs.renderApp({
  "enabled": true,
  "baseUrl": SRC,
  "out": DEST
}, _.logcb)