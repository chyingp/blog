#jQuery源码-jQuery.fn.each & jQuery.each
先上例子，下面代码的作用是：对每个选中的div元素，都给它们添加一个red类

```
$('div').each(function(index, elem){
	$(this).addClass('red');
});
```
上面用的的.each，即jQuery.fn.each，其内部是通过jQuery.each实现的

## jQuery.fn.each
先贴一下类官方API说明，非常简单，只有两点需要注意

1. 上文例子里的$(this).addClass('red')，其中，`this`指的是当前操作的dom元素
2. each中传入的方法，可以返回任意值，当返回的值为false时，跳出当前循环操作

```
/**
 * @description 对jQuery对象中，匹配的的每个dom元素执行一个方法
 * @param {Number} index 当前处理元素在集合中的位置
 * @param {DOMElement} Element 当前处理的dom元素
*/
.each( function(index, Element) )
```
下面举两个简单的例子

### 例子一：
给页面所有的div元素添加red类

```
$('div').each(function(index, elem){
	$(this).addClass('red');
});
```

### 例子二

给页面前5个div元素添加red类

```
$('div').each(function(index, elem){
	if(index>=5) return false;	// 跳出循环
	$(this).addClass('red');
});
```
如上，用法挺简单，不赘述，详细可查看 [http://api.jquery.com/each/](http://api.jquery.com/each/)

### 源码
内部是通过jQuery.each实现的，下面就讲下jQuery.each的源码，讲完jQuery.each的源码，jQuery.fn.each的源码就很简单了

```
略。。。
```

## jQuery.each
同样是先上一个简单的例子

```
$.each([52, 97], function(index, value) {
  alert(index + ': ' + value + ':' + this);
});
```
输出内容如下：

```
0: 52-52
1: 97-97
```

### 类官方API说明
同样是有两个注意点

1. 上面例子中的`this`，是集合中的元素，即下面的 `valueOfElement`
2. 在callback中返回`false`，可以跳出循环

```
/**
 * @description 对集合（数组或对象）中的每个元素，执行某个操作
 * @param {Number|String} indexInArray 元素在集合中对应的位置（如集合为数组，则为数字；如集合为对象，则为键值）
 * @param {AnyValue} valueOfElement 集合中的元素
*/
jQuery.each( collection, callback(indexInArray, valueOfElement) )
```
### 例子一

```
$.each( ['one,'two','three', 'four'], function(index, value){
	if(index >= 2) return false;
	alert( "Index:" + index + ", value: " + value );
});
```

### 例子二
从官网直接copy来的例子，凑合着看

```
$.each( { name: "John", lang: "JS" }, function(k, v){
	alert( "Key: " + k + ", Value: " + v );
});
```
### 源码

```
// args is for internal usage only
each: function( obj, callback, args ) {
	var value,
		i = 0,
		length = obj.length,
		isArray = isArraylike( obj );	// obj是不是类似数组的对象，比如 {'0':'hello', '1':'world', 'length':2}，其实就是为jQuery对象服务啦

	if ( args ) {	// args，其实没发现这个参数有什么实际作用~~直接跳过看else里面的内容即可，除了callback传的参数不同外无其他区别
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback.apply( obj[ i ], args );

				if ( value === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				value = callback.apply( obj[ i ], args );

				if ( value === false ) {
					break;
				}
			}
		}

	// A special, fast, case for the most common use of each
	} else {
		if ( isArray ) {	// 处理数组
			for ( ; i < length; i++ ) {
				value = callback.call( obj[ i ], i, obj[ i ] );

				if ( value === false ) {
					break;
				}
			}
		} else {	// 处理对象
			for ( i in obj ) {
				value = callback.call( obj[ i ], i, obj[ i ] );	// value 为callback的返回值

				if ( value === false ) {	// 注意这里，当value===false的时候，直接跳出循环了
					break;
				}
			}
		}
	}

	return obj;
},
```
### 迟到的jQuery.fn.each源码
的确很简单，只要理解了jQuery.each应该就没问题了，没什么好讲的~

```
each: function( callback, args ) {
	return jQuery.each( this, callback, args );
},
```

### 结束语
与jQuery.extend、jQuery.fn.extend一样，虽然 jQuery.each、jQuery.fn.each代码很简单，但也扮演了相当重要的作用，jQuery里大量用到了这两个方法，举例：

```
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});
```
所以，少年好好掌握each吧~~
