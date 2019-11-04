self.addEventListener('message', function (evt) {
    const num1 = evt.data.num1;
    const num2 = evt.data.num2;
    const result = num1 + num2;
    console.log('[worker] num1=' + num1 + ', num2=' + num2);
    self.postMessage({result: result});
}, false);

console.log('[worker] Worker is initialized.');