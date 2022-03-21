const AddonApiFirstExample = require("../lib/binding.js");
const assert = require("assert");

assert(AddonApiFirstExample, "The expected function is undefined");

function testBasic()
{
    const result =  AddonApiFirstExample("hello");
    assert.strictEqual(result, "world", "Unexpected value returned");
}

assert.doesNotThrow(testBasic, undefined, "testBasic threw an expection");

console.log("Tests passed- everything looks OK!");