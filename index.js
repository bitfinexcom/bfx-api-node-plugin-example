'use strict'

/**
 * This module provides an example plugin compatible with
 * {@link external:bfx-api-node-core} which logs all emitted events to the
 * console.
 *
 * @license MIT
 * @module bfx-api-node-plugin-example
 * @function
 * @returns {bfx-api-node-core.Plugin} pluginState
 * @example
 * const { subscribe, Manager } = require('bfx-api-node-core')
 * const ExamplePlugin = require('bfx-api-node-plugin-example')
 *
 * const m = new Manager({
 *   plugins: [ExamplePlugin()]
 * })
 *
 * const wsState = m.openWS()
 *
 * subscribe(wsState, 'trades', { symbol: 'tBTCUSD' })
 *
 * // plugin trade events will appear in console debug output
 */

/**
 * @external bfx-api-node-core
 * @see https://github.com/bitfinexcom/bfx-api-node-core
 */

module.exports = require('./lib/plugin')
