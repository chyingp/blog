const http = require('http');
const port = 3000;
const Chance = require('chance');
const chance = new Chance();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  function generateMore () {
    let flag;
    while ( (flag = chance.bool({likelihood: 95})) ) {
      console.log(`flag in while: ${flag}`);
      let shouldContinue = res.write(
        chance.string({ length: 16 * 1024 - 1 })
      );

      if (!shouldContinue) {
        console.log('Backpressure.');
        return res.once('drain', generateMore);
      }
    }
    console.log(`flag outside while: ${flag}`);
    res.end('\nThe end...\n', () => console.log('All data was sent.'));
  }

  generateMore();
});

server.listen(port);