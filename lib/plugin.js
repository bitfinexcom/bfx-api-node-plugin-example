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
  },

  auth: {
    te: wsHandler.bind(null, 'te'), // trade exec
    tu: wsHandler.bind(null, 'tu'), // trade update

    os: wsHandler.bind(null, 'os'), // order snapshot
    ou: wsHandler.bind(null, 'ou'), // order update
    on: wsHandler.bind(null, 'on'), // new order
    oc: wsHandler.bind(null, 'oc'), // order close

    ps: wsHandler.bind(null, 'ps'), // position snapshot
    pn: wsHandler.bind(null, 'pn'), // new position
    pu: wsHandler.bind(null, 'pu'), // position update
    pc: wsHandler.bind(null, 'pc'), // position close

    fos: wsHandler.bind(null, 'fos'), // funding offer snapshot
    fon: wsHandler.bind(null, 'fou'), // new funding offer
    fou: wsHandler.bind(null, 'fou'), // funding offer update
    foc: wsHandler.bind(null, 'foc'), // funding offer close

    fcs: wsHandler.bind(null, 'fcs'), // funding credit snapshot
    fcn: wsHandler.bind(null, 'fcu'), // new funding credit
    fcu: wsHandler.bind(null, 'fcu'), // funding credit update
    fcc: wsHandler.bind(null, 'fcc'), // funding credit close

    fls: wsHandler.bind(null, 'fls'), // funding loan snapshot
    fln: wsHandler.bind(null, 'fln'), // new funding loan
    flu: wsHandler.bind(null, 'flu'), // funding loan update
    flc: wsHandler.bind(null, 'flc'), // funding loan close

    ws: wsHandler.bind(null, 'ws'),   // wallet snapshot
    wu: wsHandler.bind(null, 'wu'),   // wallet update
    bu: wsHandler.bind(null, 'bu'),   // balance update
    miu: wsHandler.bind(null, 'miu'), // margin info update
    fiu: wsHandler.bind(null, 'fiu'), // funding info update
    fte: wsHandler.bind(null, 'fte'), // funding trade exec
    ftu: wsHandler.bind(null, 'ftu'), // funding trade update
  }
}
