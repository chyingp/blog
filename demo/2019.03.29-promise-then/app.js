// Promise.resolve('hello')
//     .then((msg) => {
//         console.log(`[01] then ${msg}`);
//     });

// Promise.reject('hello')
//     .then((msg) => {
//         console.log(`[02] then ${msg}`);
//     })
//     .catch((msg) => {
//         console.log(`[02] catch ${msg}`);
//     });

// Promise.reject('hello')
//     .then((msg) => {
//         console.log(`[03] then ${msg}`);
//     })
//     .catch((msg) => {
//         console.log(`[03] catch ${msg}`);
//     })
//     .then((msg) => {
//         console.log(`[03] then ${msg}`);
//     });

// Promise.reject('hello')
//     .then((msg) => {
//         console.log(`[04] then ${msg}`);
//     })
//     .catch((msg) => {
//         console.log(`[04] catch ${msg}`);
//         return msg;
//     })
//     .then((msg) => {
//         console.log(`[04] then ${msg}`);
//     });

Promise.reject('hello')
    .then((msg) => {
        console.log(`[04] then ${msg}`);
    })
    .catch((msg) => {
        console.log(`[04] catch ${msg}`);
        return msg;
    })
    .then((msg) => {
        console.log(`[04] then ${msg}`);
        throw 'world';
    })
    .catch((msg) => {
        console.log(`[04] then ${msg}`);
    });