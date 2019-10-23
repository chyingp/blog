const workerFileContent = `./worker.js`;
const workerBlob = new Blob(workerFileContent, { type:'text/javascript' });
const workerUrl = URL.createObjectURL(workerBlob);
const worker = new Worker(workerUrl);

worker.addEventListener('message', function(evt) {
    console.log(`[main] result is: ${evt.data.result}.`);
}, false);

worker.postMessage({num1: 20, num2: 10});

console.log('[main] Main is initialized.');