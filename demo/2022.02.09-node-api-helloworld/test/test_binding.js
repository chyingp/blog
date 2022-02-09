const 20220209NodeApiHelloworld = require("../lib/binding.js");
const assert = require("assert");

assert(20220209NodeApiHelloworld, "The expected function is undefined");

function testBasic()
{
    const result =  20220209NodeApiHelloworld("hello");
    assert.strictEqual(result, "world", "Unexpected value returned");
}

assert.doesNotThrow(testBasic, undefined, "testBasic threw an expection");

console.log("Tests passed- everything looks OK!");