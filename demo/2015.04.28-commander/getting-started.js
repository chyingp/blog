var program = require('commander');
 
program
  .version('0.0.1')	// xx --version
  .option('-p, --peppers', 'Add peppers')	// 可以通过-p 或者 --p
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')  // 如果没有特殊声明，则为默认值marble
  .parse(process.argv);
 
console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
// node app.js -P hello --> program.pineapple === 'hello'
// node app.js -P  --> program.pineapple === true
// node app.js     --> program.pineapple 为 undefined
// console.log(program.pineapple);
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);