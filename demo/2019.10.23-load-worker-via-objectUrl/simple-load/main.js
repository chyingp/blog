const worker = new Worker('worker.js');

worker.addEventListener('message', function(evt) {
    console.log(`[main] Got result from worker thread: ${evt.data.result}.`);
}, false);

worker.postMessage({num: 2});

console.log(`[main] Main is initialized.`);