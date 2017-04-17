// 对比4：for循环是个父作用域，循环体内部是个独特的子作用域
// 谁平常这样写，先枪毙10分钟
// 参考：http://es6.ruanyifeng.com/#docs/let
// 
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}

// 输出
// abc
// abc
// abc