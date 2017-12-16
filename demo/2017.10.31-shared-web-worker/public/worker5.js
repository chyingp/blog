var pages = [];
var ports = [];

var onconnect = function(e) {
  // len++;

  var port = e.ports[0];
  ports.push(port);

  port.addEventListener('message', function(e) {
    // var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    // port.postMessage(workerResult);
    // port.postMessage( e.data.toUpperCase() );
    // port.postMessage(e.data);
    // port.postMessage(pages);
    var data = e.data;
    switch (data.action) {
      case 'page_open':
        pages.push({id: data.id, href: data.url});
        break;
      case 'page_close':
        pages = pages.filter(function (item) {
          return item.id !== data.id;
        });
        break;  
    }
    
    ports.forEach(function (p) {
      p.postMessage({action: 'focus'});
    });
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.

  // port.postMessage('connect: ' + len);
  // port.postMessage('connect: ' + port);  
};