## 非runtime

命令

```
NODE_ENV=no_runtime ../node_modules/.bin/babel demo.js
```

输出如下，需要自己引入 regeneratorRuntime

```
"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(foo);

function foo() {
  return regeneratorRuntime.wrap(function foo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
```

## runtime

命令

```bash
NODE_ENV=runtime ../node_modules/.bin/babel demo.js
```

输出

```
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(foo);

function foo() {
  return _regenerator2.default.wrap(function foo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
```