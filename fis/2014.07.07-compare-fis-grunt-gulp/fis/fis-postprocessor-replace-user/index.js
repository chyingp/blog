/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

module.exports = function(content, file, conf){
    return content.replace(/\$\{usrname\}/, '程序猿小卡');
};
