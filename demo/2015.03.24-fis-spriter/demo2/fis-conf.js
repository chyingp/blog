fis.config.set('modules.spriter', 'csssprites');

fis.config.set('roadmap.path', [{
    reg: /\/css\/.*\.css$/i,
    //配置useSprite表示reg匹配到的css需要进行图片合并
    useSprite: true
}]);