// 成功合并
// 没有repeat，position不为center等
var spriter = require('ispriter');
spriter.merge({

    "input": {

        /**
         * 原 cssRoot
         */
        "cssSource": ["./css/*.css"]
    },
    "output": {

        /**
         * 原 cssRoot
         */
        // "cssDist": "./css/spriter/",

        /**
         * 原 imageRoot
         */
        // "imageDist": "./img/",

        /**
         * 原 maxSize
         */
        "maxSingleSize": 10,
        
        "margin": 3
    }
});