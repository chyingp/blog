// const保证的，并不是变量的值不能改动，而是变量所指向的内存地址不能改动。
// 也就是说，如果const声明的是复合类型的变量，比如Object，那么该变量实际是可以修改的。

const obj = {
	nick: 'chyingp'
}

obj.nick = 'casper'

console.log(obj.nick)  // casper

// TypeError: Assignment to constant variable.
obj = {
	nick: 'hello'
}