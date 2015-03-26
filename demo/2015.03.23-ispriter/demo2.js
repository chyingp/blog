// 成功合并
// repeat的图片不会合并进去
var spriter = require('ispriter');
spriter.merge({

    "input": {

        /**
         * 原 cssRoot
         */
        "cssSource": ["./css/demo2.css"]
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