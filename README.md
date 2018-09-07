# Bitfinex Node API Example Plugin

[![Build Status](https://travis-ci.org/bitfinexcom/bfx-api-node-plugin-example.svg?branch=master)](https://travis-ci.org/bitfinexcom/bfx-api-node-plugin-example)

This repo provides an example plugin which logs all emitted events to the console. For a full list of supported events, see `lib/plugin.js`

### Example Usage
```js
const ExamplePlugin = require('bfx-api-node-plugin-example')

const m = new Manager({
  plugins: [ExamplePlugin()],
  // ...
})

m.openWS()
```

For more information on plugin development, check the [node API wiki](https://github.com/bitfinexcom/bitfinex-api-node/wiki)