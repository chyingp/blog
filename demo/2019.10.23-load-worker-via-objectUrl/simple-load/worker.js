function fibonacci(num) {
    if(num === 0){
        return 0;
    } else if(num ===1) {
        return 1;
    }else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
 }

self.addEventListener('message', function (event) {
    const num = event.data.num;
    const result = fibonacci(num);
    console.log(`[worker] Got num from main thread: ${num}.`);
    self.postMessage({result: result});
}, false);

console.log(`[worker] Worker is initialized.`);