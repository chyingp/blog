# jQuery源码-jQuery.extend
从jQuery的源码中可以看到，jQuery.extend和jQuery.fn.extend其实是同指向同一方法的不同引用

```
jQuery.extend = jQuery.fn.extend = function() {
```
瞄了下它的代码，其实不复杂，但是在jQuery中扮演了极其重要的作用

**`jQuery.extend`** 对jQuery本身的属性和方法进行了扩展

**`jQuery.fn.extend`** 对jQuery.fn的属性和方法进行了扩展

```
// 扩展jQuery对象本身，此处添加了jQuery.noConflict方法
jQuery.extend({
	noConflict: function（deep）{
		//实现细节略
	},
	//..
})

// 扩展jQuery.fn，此处添加 jQuery.fn.data方法
jQuery.fn.extend({
	data: function( key, value ) {
		//实现细节略
	},
	//...
})
````

## extend的各种用法
下面会举例说明extend的常见使用方法，最后面的时候简单提下extend方法内部一些实现细节

### 实例一：扩展jQuery本身
代码如下

```
jQuery.extend({nick: 'casper'});
```
打印下

```
console.log(jQuery.nick);	//输出：'casper'
```

### 实例二：扩展对象
代码如下，将obj2的的属性/方法拷贝到obj1上，需要注意的有两点

1. obj1本身会被修改
2. 返回的事修改后的obj1

```
var obj1 = {nick: 'casper'}，
	obj2 = {nick: 'chyingp', age: 25};
var obj3 = jQuery.extend(obj1, obj2);
```
打印下

```
console.log( JSON.stringify(obj1) );	// 输出 {"nick":"chyingp","age":25}
console.log( JSON.stringify(obj3) );	// 输出 {"nick":"chyingp","age":25}
```

### 实例三：浅拷贝-当obj中存在引用
如下代码，obj1.scores 的值是个指向对象的引用，当obj2中存在同名应用时，默认obj2中的同名引用会覆盖obj1中那个

```
var obj1 = { nick: 'casper',  scores: { math: 100, English: 100 } },
	obj2 = { scores: { hitory: 100 } },
	obj3 = jQuery.extend(obj1, obj2);
```
打印下

```
console.log( JSON.stringify(obj1) );	// 输出 {"nick":"casper","scores":{"hitory":100}}
```

### 实例四：深拷贝-当obj中存在引用
还是实例三的代码，不同的是，第一个参数改成true，表明这是深拷贝

```
var obj1 = { nick: 'casper',  scores: { math: 100, English: 100 } },
	obj2 = { scores: { hitory: 100 } },
	obj3 = jQuery.extend( true, obj1, obj2 );
```
打印下

```
console.log( JSON.stringify(obj1) );	// 输出 {"nick":"casper","scores":{"math":100,"English":100,"hitory":100}}
```

### 实例五：扩展jQuery.fn
如下代码，给jQuery.fn添加 say 方法~

```
jQuery.fn.extend({
	say: function(){
		console.log("hello, I'm "+this.attr('id'));
	}
});
```

打印下

```
$('#casper').say();	// 输出 hello, I'm casper
```

## extend的实现细节
直接上代码

```
jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},	// 常见用法 jQuery.extend( obj1, obj2 )，此时，target为arguments[0]
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {	// 如果第一个参数为true，即 jQuery.extend( true, obj1, obj2 ); 的情况
		deep = target;	// 此时target是true
		target = arguments[1] || {};	// target改为 obj1
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {  // 处理奇怪的情况，比如 jQuery.extend( 'hello' , {nick: 'casper})~~
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {	// 处理这种情况 jQuery.extend(obj)，或 jQuery.fn.extend( obj )
		target = this;	// jQuery.extend时，this指的是jQuery；jQuery.fn.extend时，this指的是jQuery.fn
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {	// 比如 jQuery.extend( obj1, obj2, obj3, ojb4 )，options则为 obj2、obj3...
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {	// 防止自引用，不赘述
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				// 如果是深拷贝，且被拷贝的属性值本身是个对象
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {	// 被拷贝的属性值是个数组
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {	被拷贝的属性值是个plainObject，比如{ nick: 'casper' }
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );  // 递归~

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {	// 浅拷贝，且属性值不为undefined
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};
```
## 结束语
jQuery.extend / jQuery.fn.extend方法本身很简单，但在jQuery整体设计中的作用非常重要，理解了jQuery.extend(obj)、jQuery.fn.extend(obj) 分别是对jQuery本身、jQuery.fn 进行扩展，对后续的源码分析会很有帮助，除此之外，没了~~