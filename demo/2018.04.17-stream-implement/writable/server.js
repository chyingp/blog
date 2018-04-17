const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  let num;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  while ((num = Math.random()) > 0.1) {
    res.write('res.write(): ' + num.toString() + '\n');
  }
  res.end('res.end(): the end');
  res.on('finish', () => console.log('finished.'));
}).listen(port);

// curl http://127.0.0.1:3000

/*
res.write(): 0.3070578038171923
res.write(): 0.6395702937677197
res.write(): 0.7310690728411677
res.write(): 0.9383379632316118
res.write(): 0.47331240688271636
res.write(): 0.1311702075669403
res.write(): 0.7170623464834849
res.write(): 0.3973024871804054
res.write(): 0.7583489396978729
res.write(): 0.5808965383971327
res.write(): 0.22983892514760362
res.write(): 0.25565119168375583
res.end(): the end
*/