const worker = new Worker('worker.js');

worker.addEventListener('message', function(evt) {
    console.log(`[main] result is: ${evt.data.result}.`);
}, false);

worker.postMessage({num1: 20, num2: 10});

console.log('[main] Main is initialized.');