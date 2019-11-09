Promise.reject('hello')
    .then((msg) => {
        console.log(`[01] then ${msg}`);
    })
    .catch((msg) => {
        console.log(`[02] catch ${msg}`);
        return msg;
    })
    .then((msg) => {
        console.log(`[03] then ${msg}`);
        throw 'world';
    })
    .catch((msg) => {
        console.log(`[04] catch ${msg}`);
    });