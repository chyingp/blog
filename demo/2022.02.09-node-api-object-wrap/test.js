const addon = require('./build/Release/2022.02.09-node-api-object-wrap-native.node');
const instance = new addon.NodeApiObjectWrap('hello');

instance.greet('world');