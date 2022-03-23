const addon = require('bindings')('addon');
const start = new Date();
addon.echo('hello', (error, str) => {
    const end = new Date();
    console.log(`str is ${str}`);
    console.log(`end - start = ${end - start}`);
});