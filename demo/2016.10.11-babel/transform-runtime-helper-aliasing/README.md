## 非runtime

命令

```
NODE_ENV=no_runtime ../node_modules/.bin/babel demo.js
```

输出

```
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor= props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = function () {
  function Demo(name) {
    _classCallCheck(this, Demo);

    this.name = name;
  }

  _createClass(Demo, [{
    key: "say",
    value: function say(msg) {
      console.log(msg);
    }
  }]);

  return Demo;
}();
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

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = function () {
  function Demo(name) {
    (0, _classCallCheck3.default)(this, Demo);

    this.name = name;
  }

  (0, _createClass3.default)(Demo, [{
    key: "say",
    value: function say(msg) {
      console.log(msg);
    }
  }]);
  return Demo;
}();
```