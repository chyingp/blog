# jQuery源码-美元$的若干种使用方法
学习jQuery源码，第一步是了解jQuery整体核心代码结构。第二步，当然就是了解无比强大无所不能的美元$。根据平常使用jQuery的经验，你会发现，几乎所有的语句都是以美元开头的，比如：

```
$(function(){
    console.log('dom ready 啦！！');
});
```
又比如：

```
$('#casper').addClass('handsome');
```
当然还有其他。。。翻开jQuery的源码你会发现，里面就一行代码：

```
jQuery = function( selector, context ) {
  // The jQuery object is actually just the init constructor 'enhanced'
	return new jQuery.fn.init( selector, context, rootjQuery );   //就是这货
},
```
于是，我们接下来的任务就是一探jQuery.fn.init的究竟：里面究竟是什么东东，能够让美元符号$如此强大以至于无处不在。

## 初探jQuery.fn.init
老规矩，打开编辑器，定位到jQuery.fn.init这个方法。如果是用sublime的话，可以试下ctrl+r，然后输入init，第一个出来的搜索结果就是。

相信很多童鞋跟我的第一反应是：oh my god！将近90行代码！不过还可以接受啦，工作中还见别人写过300++行的方法，想想90行也算不得可怕。

然而，当你再往下看，可能就会有种想死的心——怎么这么多if、else！

不卖关子之所以会有那么多if、else，是因为——$有将近10种用法，文章最开头列举的不过是最常见的两种用法而已。

以下为jQuery.fn.init的源码，瞄一眼感受下这代码的可怕就可以了，可以暂时忽略其中的实现细节，安心进入下一节。

```
init: function( selector, context, rootjQuery ) {
    var match, elem;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
        return this;
    }

    // Handle HTML strings
    if ( typeof selector === "string" ) {
        if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
            // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [ null, selector, null ];

        } else {
            match = rquickExpr.exec( selector );
        }

        // Match html or make sure no context is specified for #id
        if ( match && (match[1] || !context) ) {

            // HANDLE: $(html) -> $(array)
            if ( match[1] ) {
                context = context instanceof jQuery ? context[0] : context;

                // scripts is true for back-compat
                jQuery.merge( this, jQuery.parseHTML(
                    match[1],
                    context && context.nodeType ? context.ownerDocument || context : document,
                    true
                ) );

                // HANDLE: $(html, props)
                if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
                    for ( match in context ) {
                        // Properties of context are called as methods if possible
                        if ( jQuery.isFunction( this[ match ] ) ) {
                            this[ match ]( context[ match ] );

                        // ...and otherwise set as attributes
                        } else {
                            this.attr( match, context[ match ] );
                        }
                    }
                }

                return this;

            // HANDLE: $(#id)
            } else {
                elem = document.getElementById( match[2] );

                // Check parentNode to catch when Blackberry 4.6 returns
                // nodes that are no longer in the document #6963
                if ( elem && elem.parentNode ) {
                    // Handle the case where IE and Opera return items
                    // by name instead of ID
                    if ( elem.id !== match[2] ) {
                        return rootjQuery.find( selector );
                    }

                    // Otherwise, we inject the element directly into the jQuery object
                    this.length = 1;
                    this[0] = elem;
                }

                this.context = document;
                this.selector = selector;
                return this;
            }

        // HANDLE: $(expr, $(...))
        } else if ( !context || context.jquery ) {
            return ( context || rootjQuery ).find( selector );

        // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
        } else {
            return this.constructor( context ).find( selector );
        }

    // HANDLE: $(DOMElement)
    } else if ( selector.nodeType ) {
        this.context = this[0] = selector;
        this.length = 1;
        return this;

    // HANDLE: $(function)
    // Shortcut for document ready
    } else if ( jQuery.isFunction( selector ) ) {
        return rootjQuery.ready( selector );
    }

    if ( selector.selector !== undefined ) {
        this.selector = selector.selector;
        this.context = selector.context;
    }

    return jQuery.makeArray( selector, this );
},
```

## $的n种用法
上面提到，$的用法有将近10种，也就是说，jQuery.fn.init这一个函数需要处理的情况有将近10种。那究竟都是哪些情况呢？如果想从它的源码直接看出来的话，那最好放弃。当然并不是说此路不通，只不过有更好的方法而已。

jQuery之所以这么受欢迎，其中一个原因是它的文档很齐全，这个时候果断可以去看它的API文档，请猛击[这里](http://api.jquery.com/jQuery/)

jQuery的API文档里面很详细地将各种情况都列了出来，可以看到，里面共列举了三大种、八小种情况。至于每种情况的作用、参数、返回值，可自行查看API说明，这里不赘述。

```
jQuery( selector [, context ] )
	jQuery( selector [, context ] )
	jQuery( element )
	jQuery( elementArray )
	jQuery( object )
	jQuery( jQuery object )
	jQuery()
jQuery( html [, ownerDocument ] )
	jQuery( html [, ownerDocument ] )
	jQuery( html, attributes )
jQuery( callback )
	jQuery( callback )
```

## $的n种用法——更直观的例子
上面我们已经将$的n种用法非常详细地列举出来了，但这只是第一步，因为对着jQuery.fn.init错综复杂的逻辑分支，你有可能依旧手忙脚乱，不知如何下手。里面比较明显能够看出来的是下面这几种情况：

```
jQuery()
jQuery( element )
jQuery( callback )
```
除了上面这三种情况外，其他五种情况依旧无法在代码里直观地看出来。那么肿么办呢？其实我也没有特别好的方法，但可以将自己的经验分享一下，分两步：

1. 把jQuery的API文档详细地过一遍，了解$的多种用法以及细节，可[点击这里](http://api.jquery.com/jQuery/)
2. 断点调试，针对上面列出的几种情况，编写最简单的代码试例，然后断点进去看看都跑到了哪些逻辑分支

### 断点用例
好，于是我们开始编写用例，下面提到的用例都基于下面的html片段

	<div id="id_container" class="container">
		<div class="header"></div>
	</div>

直接上具体的用例。对于这些用例的具体分析会在下面再讲到。

```
//
$('#id_container')
$('.container')

//
$('.header', $('#id_container')[0])
$('.header', $('#id_container'))

//
$(document.getElementsByTagName('div'))
$(document.getElementsByTagName('div')[0])
$($('.header'))
$({name:'casper', age:25})

//
$('<div class="content"><span>casper</span></div>')
$('<div class="content"><span>casper</span></div>', document)
$('<div></div>', {'class':'content'})
$('<div/>', {'class':'content'})

//
$(function(){
	console.log('$(callback)');
});

```

### jQuery()
灰常简单，直接返回this（jQuery对象）

```
init: function( selector, context, rootjQuery ) {
    var match, elem;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
        return this;
    }
```

### $(callback)
这个很简单，直接跑进下面这个分支然后就return了

```
else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		} 
```

### jQuery( element )
同样很简单，跑到这个分支里去了

```
else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}
```

### jQuery( elementArray )
这个比较费解，似乎前面所有的if、else都不符合，没错，其实只有下面这么句话

```
return jQuery.makeArray( selector, this );
```

### jQuery( jQuery object )
跳过代码细节，先了解下面的背景知识，看下面的代码。对于$(selector)返回的jQuery对象，上面都会附加一个selector属性，作用不介绍。

```
$('.header').selector
```
于是乎，华丽丽地跑进下面这个分支，其实作用就是：创建一个jQuery对象，并将参数jQuery对象里的dom节点拷贝到新创建的jQuery对象里

```
if ( selector.selector !== undefined ) {
	this.selector = selector.selector;
	this.context = selector.context;
}
return jQuery.makeArray( selector, this );
```

### jQuery( selector [, context ] )
这个的话，情况比较多，分开讲
#### jQuery('#casper')

```
init: function( selector, context, rootjQuery ) {
	//各种省略
        } else {	//先跑到这个分支里去鸟
            match = rquickExpr.exec( selector );  //这里，match==['#casper', undefined, 'casper']
        }
	//各种省略
            // HANDLE: $(#id)	//然后跑到这个分支了，其实源码的注释这里也说了~~
            } else {
                elem = document.getElementById( match[2] );

                // Check parentNode to catch when Blackberry 4.6 returns
                // nodes that are no longer in the document #6963
                if ( elem && elem.parentNode ) {
                    // Handle the case where IE and Opera return items
                    // by name instead of ID
                    if ( elem.id !== match[2] ) {
                        return rootjQuery.find( selector );
                    }

                    // Otherwise, we inject the element directly into the jQuery object
                    this.length = 1;
                    this[0] = elem;
                }

                this.context = document;
                this.selector = selector;
                return this;
            }

        // HANDLE: $(expr, $(...))
        }     // 下面全部省略
```

#### jQuery('#casper', docuemnt)

```
//首先进入这个分支
match = rquickExpr.exec( selector );  //['#casper', undefined, 'casper']

//然后进入这个分支
} else {
				return this.constructor( context ).find( selector );
			}
```

#### jQuery('.header')

```
//先进入这个分支
match = rquickExpr.exec( selector );  // match==null

//然后进入这个分支~
else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} 
```
#### jQuery('.header', document)

```
//首先进入这里
match = rquickExpr.exec( selector );  // match==null

//然后进入这里
// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}
```

#### jQuery('.header', $('#id_container'))

```
//首先进入这里
match = rquickExpr.exec( selector );  // match==null

//然后进入这里
// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );
```

#### jQuery(html, attribute)
具体例子jQuery('&lt;div&gt;&lt;/div&gt;', {style: 'background:red;'})，或者jQuery('&lt;div/&gt;', {style: 'background:red'})

```
//首先进入这里
		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];  //[null, '<div></div>', null]

			}
//然后进入这里
			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;  // context == {style:{background:red}}
					
					//先把创建好的dom借点复制到this里
					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );
					//然后将{style: 'background:red'}等属性添加到创建好的dom节点上
// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				}

```

#### jQuery('&lt;div&gt;&lt;span&gt;casper&lt;/span&gt;&lt;/div&gt;')
这个应该是我们经常用到的。。。

```
		//首先华丽丽进入这个分支
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			}
			//然后进入这个分支
			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				//在进入这个分支
				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );
// 木有赋值
					return this;
								
```

## 结束语
好了，万恶的美元$就先介绍到这里，第二部的源码详解本来还想把代码路径全部标出来，这样更方便观众围观。不过~~markdown给改变代码的字体颜色不知道咋整~~将就吧，且听下回分解


