import increment from './increment';
import decrement from './decrement';
import util, {greet} from './util';

let count = 10;

console.log( increment(count) );
console.log( decrement(count) );

// 运行：babel-node main.js
// 输出：
// 11
// 9

util();
greet();
// util default
// greet