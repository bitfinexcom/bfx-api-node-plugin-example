'use strict'

const debug = require('debug')('bfx:api:example-plugin')
const wsHandler = (name, args = {}) => {
  debug('called %s: %j', name, args)
}

/**
 * Example WSv2 plugin that logs called handlers
 */
module.exports = {
  type: 'ws2',

  manager: {
    'ws:created': wsHandler.bind(null, 'ws:created'),
    'ws:destroyed': wsHandler.bind(null, 'ws:destroyed'),
  },

  ws: {
    open: wsHandler.bind(null, 'open'),
    message: wsHandler.bind(null, 'message'),
    error: wsHandler.bind(null, 'error'),
    close: wsHandler.bind(null, 'close'),
  },

  events: {
    auth: wsHandler.bind(null, 'auth'),
    'auth:success': wsHandler.bind(null, 'auth:success'),
    'auth:error': wsHandler.bind(null, 'auth:error'),

    subscribed: wsHandler.bind(null, 'subscribed'),
    unsubscribed: wsHandler.bind(null, 'unsubscribed'),
    info: wsHandler.bind(null, 'info'),
    config: wsHandler.bind(null, 'config'),
    error: wsHandler.bind(null, 'error'),
  },

  data: {
    ticker: wsHandler.bind(null, 'ticker'),
    trades: wsHandler.bind(null, 'trades'),
    candles: wsHandler.bind(null, 'candles'),
    book: wsHandler.bind(null, 'book'),
  }
}
