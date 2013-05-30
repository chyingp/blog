前端的童鞋对jQuery绝对不会陌生，有不少刚入门的筒子，在不知JS为何物的时候，就已经在用jQuery了。这也应该归功于前端恶劣的生存环境：各自为政的浏览器厂商，依旧严峻的兼容性问题，并不好用的原生API。。。

使用jQuery的理由有很多，喜欢它的理由也很多，优雅的接口，丰富的插件，完善的文档等。作为一名有进取心的前端攻城狮，大家心理或多或少都有一个框架梦，总用它人写的库，内心总归有些那么不是滋味。

那好吧，干脆自己写一个，“师夷长技以自强”嘛，于是热火朝天地开工，一个又一个小JQ就这样横空出世。再精心挑选上好的测试用例证明自己的库比其他库更牛逼，当然，jQuery基本都在对比之列。

此处省略三千字。。下面开始进入jQuery源码分析之路

## jQuery是什么
好吧，这里的jQuery指的并不是“jQuery库”，而是jQuery这个对象。首先用你习惯使用的编辑器打开jQuery-1.9.1.js，最好能够支持代码高亮和智能折叠。好家伙，源码加注释共9500++行，怪吓人的。没错，这是每个有志学习jQuery源码的童鞋需要过的第一道坎。其实，完全没有必要害怕，将多余的噪音去掉，其实jQuery就是下面几行代码而已：
```
(function( window, undefined ) {
	var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	};
	window.jQuery = window.$ = jQuery;
})( window );
```
我们更为常用的美元符号$，其实就是jQuery的同名对象，而jQuery是个方法，它的作用是返回一个`jQuery对象`，更确切地来说，是jQuery.fn.init对象。至于为什么会返回jQuery.fn.init对象，可以小小参考下之前写的另一篇文章[【jquery学习笔记】美元背后的一点小技巧](http://www.cnblogs.com/chyingp/archive/2013/03/10/jquery_2.html)

## 从一行代码说jQuery的核心源码结构
有下面这么一行代码
```
$('#casper').addClass('handsome‘)，
```
这行代码的作用不用多说：给ID为casper的dom节点添加一个名为handsome的class。很简单的一句代码，拆成两部分来看：
* `$('#casper')` 返回一个jQuery对象，该对象的属性’0‘包含了选中的dom节点=> $('#casper')[0] === document.getElementById('casper')
* `.addClass('handsome')` 给选中的dom节点添加handsome类，addClass为jQuery的prototype方法

于是我们把之前的那个简陋的骨架再丰满下，整个jQuery的骨架就基本出来了，里面的代码关键点在**源码骨架**后面会逐个进行讲解

### 源码骨架
```
(function( window, undefined ) {
var
    jQuery = function( selector, context ) {
        // The jQuery object is actually just the init constructor 'enhanced'
        return new jQuery.fn.init( selector, context, rootjQuery );
    }；

    //各种原型属性
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function( selector, context, rootjQuery ) {
            //...
        },
        ...
    };
    jQuery.fn.init.prototype = jQuery.fn;

    //extend方法，用来扩展jQuery，或jQuery.fn
    jQuery.extend = jQuery.fn.extend = function() {
        //...
    };

    jQuery.fn.extend({
        addClass: function( value ) {
            //...
            return this;    //返回this，链式调用的秘密
        }
    });

    window.jQuery = window.$ = jQuery;

})( window );
```

### return new jQuery.fn.init( selector, context, rootjQuery );
$('#casper')跟new $('#casper')是一样的。个人觉得这里设计的原因，一个减少写一堆new的麻烦，同时也可以避免开发者不小心遗漏了new导致的诡异bug。当然，不好的地方是，代码有点绕，这也算是jQuery源码的其中一个特点。

### jQuery.fn = jQuery.prototype
没什么好讲，jQuery.prototype为jQuery的原型方法，这里用jQuery.fn来代替jQuery.prototype，只是为了少写几个字符，平常写插件时就是在这东东上面做修改

### jQuery.fn.init.prototype = jQuery.fn
很好很绕的一个语句，上面说了$(’#casper‘)返回的其实是个jQuery.fn.init对象。所以，这里的作用，是让jQuery.fn上的方法都成为jQuery.fn.init对象的原型方法。
这个语句应该让很多刚接触jQuery源码的人感到困惑，包括我（=_=），可以试`jQuery.fn.init.prototype.init.prototype.init...`，如果你愿意可以一直写下去。

### addClass: function( value ) {...
下面这段代码很短很关键，别看它很简单，jQuery众多强大的接口就是这样通过jQuery.fn.extend一个一个扩展出来的，不赘述
```
    jQuery.fn.extend({
        addClass: function( value ) {
```

## 写在后面
本文对jQuery源码核心结构进行了粗略的介绍，当然jQuery实际的源码要比这个复杂得多，但只要掌握了上面的要点，后续的分析就会轻松很多。jQuery源码之所以比较难看懂，是因为里面有许多为了解决糟糕的浏览器兼容性问题而引进的hack。

万事开头难，这是笔者jQuery源码解析的开篇之作，网络上这类的文章很多，而且有些写的很不错，这里写作的原因，一来总结，二来备忘。

未完待续。

