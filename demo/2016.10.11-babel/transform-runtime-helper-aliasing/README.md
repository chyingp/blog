## 非runtime

命令

```
NODE_ENV=no_runtime ../node_modules/.bin/babel demo.js
```

输出

```
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = function Demo() {
  _classCallCheck(this, Demo);
};
```

## runtime

命令

```bash
NODE_ENV=runtime ../node_modules/.bin/babel demo.js
```

输出

```
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = function Demo() {
  (0, _classCallCheck3.default)(this, Demo);
};
```