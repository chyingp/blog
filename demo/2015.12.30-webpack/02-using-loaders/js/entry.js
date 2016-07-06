// 不推荐：require资源的时候，将loader也声明在源代码中
require('!style!css!../css/style.css');

// 推荐：将 *.scss 对应的loader在配置文件中声明
require('../scss/entry.scss');

