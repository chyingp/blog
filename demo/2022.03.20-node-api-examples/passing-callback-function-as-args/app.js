const addon = require('bindings')('addon');

function printResult(result) {
    console.log(`result is ${result}`);
};

const result = addon.add(10, 20, printResult);