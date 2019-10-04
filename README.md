# Bitfinex Example Plugin for the Node.JS API

[![Build Status](https://travis-ci.org/bitfinexcom/bfx-api-node-plugin-example.svg?branch=master)](https://travis-ci.org/bitfinexcom/bfx-api-node-plugin-example)

This repo provides an example plugin compatible with `bfx-api-node-core` which logs all emitted events to the console. 

### Installation

```bash
npm i --save bfx-api-node-plugin-example
```

### Quickstart & Example
```js
const { Manager } = require('bfx-api-node-core')
const ExamplePlugin = require('bfx-api-node-plugin-example')

const m = new Manager({
  plugins: [ExamplePlugin()],
  // ...
})

m.openWS()
```

### Docs

For a full list of supported events, see `lib/plugin.js`.
For a brief executable example, see `examples/ws2_manager_usage.js`

For more information on plugin development, check the [node API wiki](https://github.com/bitfinexcom/bitfinex-api-node/wiki)

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
