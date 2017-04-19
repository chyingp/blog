// 如果Object.freeze(obj)，那么对obj的修改可能导致两种结果
// 1、非strict模式：静默失败
// 2、strict模式：抛出异常
'use strict';

const obj = Object.freeze({
	nick: 'chyingp'
})

obj.nick = 'casper'  // TypeError: Cannot assign to read only property 'nick' of object '#<Object>'