// 成功合并
// 没有repeat，position不为center等
var spriter = require('ispriter');
spriter.merge({

    "input": {

        /**
         * 原 cssRoot
         */
        "cssSource": ["./css/demo1.css"]
    },
    "output": {

        /**
         * 原 cssRoot
         */
        "cssDist": "./sprite/css/",

        /**
         * 原 imageRoot
         */
        "imageDist": "./img/",

        /**
         * 原 maxSize
         */
        "maxSingleSize": 60,
        
        "margin": 3
    }
});