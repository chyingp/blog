## 非runtime

命令

```
NODE_ENV=no_runtime ../node_modules/.bin/babel demo.js
```

输出如下，`Promise`需要通过polyfill引入。

```
"use strict";

var promise = new Promise();
```

## runtime

命令

```bash
NODE_ENV=runtime ../node_modules/.bin/babel demo.js
```

输出

```
"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var promise = new _promise2.default();
```