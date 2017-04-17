// typeof 不再安全

if(typeof a === 'undefined') console.log('a is not defined');

if(typeof b === 'undefined') console.log('b is not defined');  // ReferenceError: b is not defined

let b;