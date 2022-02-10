const addon = require('../build/Release/2022.02.09-node-api-object-wrap-native');

function NodeApiObjectWrap(name) {
    this.greet = function(str) {
        return _addonInstance.greet(str);
    }

    var _addonInstance = new addon.NodeApiObjectWrap(name);
}

module.exports = NodeApiObjectWrap;
