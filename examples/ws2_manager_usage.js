'use strict'

process.env.DEBUG = '*'

const ExamplePlugin = require('../')
const { subscribe, Manager } = require('bfx-api-node-core')

const m = new Manager({
  plugins: [ExamplePlugin()]
})

const wsState = m.openWS()

subscribe(wsState, 'trades', { symbol: 'tBTCUSD' })

// plugin trade events will appear in console debug output
