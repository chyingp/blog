const addon = require('../build/Release/constructor-with-object-wrap-native');

function ConstructorWithObjectWrap(name) {
    this.greet = function(str) {
        return _addonInstance.greet(str);
    }

    var _addonInstance = new addon.ConstructorWithObjectWrap(name);
}

module.exports = ConstructorWithObjectWrap;
