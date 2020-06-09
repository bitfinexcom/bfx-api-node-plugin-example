<a name="bfx-api-node-plugin-example"></a>

## bfx-api-node-plugin-example() ⇒ <code>bfx-api-node-core.Plugin</code>
This module provides an example plugin compatible with
[bfx-api-node-core](https://github.com/bitfinexcom/bfx-api-node-core) which logs all emitted events to the
console.

**Kind**: global function  
**Returns**: <code>bfx-api-node-core.Plugin</code> - pluginState  
**License**: MIT  
**Example**  
```js
const { subscribe, Manager } = require('bfx-api-node-core')
const ExamplePlugin = require('bfx-api-node-plugin-example')

const m = new Manager({
  plugins: [ExamplePlugin()]
})

const wsState = m.openWS()

subscribe(wsState, 'trades', { symbol: 'tBTCUSD' })

// plugin trade events will appear in console debug output
```
