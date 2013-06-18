## jQuery.fn.attr、jQuery.fn.prop的区别

假设页面有下面这么个标签，$('#ddd').attr('nick')、$('#ddd').prop('nick')分别会取得什么值？
```
<div id="test" nick="casper" class="dddd"></div>
```
没什么关子好卖，答案如下：
```
$('#test').attr('nick');  // "casper"
$('#test').prop('nick');  // undefined
```
再看看下面这几行代码：
```
$('#test')[0].nick = 'chyingp';
$('#test').attr('age');  // "casper"
$('#test').prop('nick');  // "chyingp"
```
看到这里应该知道这两个方法的区别了。其实从方法名也可以大致猜出来，.attr()、.prop()分别取的是节点的attribute值、property值。

至于attribute、property的区别，还真不知道怎么解释，有分别翻译成“特性”、“属性”的，这两个词看完后还是有头雾水。我就干脆直接理解成：

* attribute: 直接写在标签上的属性，可以通过setAttribute、getAttribute进行设置、读取

* property: 通过“.”号来进行设置、读取的属性，就跟Javascript里普通对象属性的读取差不多。

怎么方便怎么记吧。为方便区分，下文统一用特性来代指attribute，用属性来表示property。

 

##费解的attribute和property——隐形创建的property

 attribute、property令人费解的地方在于：

1、一些常用attribute，比如id、class、value等，在设置attribute值的时候（直接写标签里，或通过setAttribute方法），会创建对应的property，部分情况下是同名的，比如id
```
document.getElementsByTagName('div')[0].id;  // "casper"
document.getElementsByTagName('div')[0].getAttribute('id');  // "casper"
```
2、如1提到的，对某个attribute，创建了对应的property，但却用了不同的名称，比如class，对应的property为className
```
document.getElementsByTagName('div')[0].className;  // "dddd"
document.getElementsByTagName('div')[0]['class'];  // undefined
```
所以导致下面代码的诡异之处：
```
$('test').attr('class', 'dddd');  //有效
$('test').attr('className', 'dddd');  //无效
```
$('test').prop('class', 'dddd');  //无效
$('test').prop('className', 'dddd');  //有效
 

##费解的attribute和property——以checkbox为例

假设页面有这么个复选框，假设它的初始状态为选中

<input type="checkbox" id="box" checked="checked" />
不知道有多少人曾经想我一样，被下面的代码弄得有些抓狂：false、null、"" 轮番上阵，复选框依旧保持“选中”状态
```
$('#box')[0].setAttribute('checked', false);
$('#box')[0].getAttribute('checked', false);  // 'false'
```
再试试下面这行代码估计更要抓狂了，T-T
```
$('#box')[0].checked;  // true
```
好吧，如checkbox的checked属性，它的值为Boolean类型，特点是：

1）只要特性checked在标签里出现了，不管值是什么，复选框就会被选中。此时属性checked为true，否则为false；

2）后续修改特性checked的值，不会导致checkbox的选中状态改变；

3）后续修改属性checked的值，会导致checkbox的选中状态改变；

简单demo如下：

```
<input type="checkbox" id="box" checked="checked" />


<script>
document.getElementById('box').setAttribute('checked', false);
document.getElementById('box').getAttribute('checked');  // "false"
document.getElementById('box').checked;  // true

document.getElementById('box').checked = false;  // 复选框选中态消失

</script>
```
也可以参考jQuery官网的demo：http://api.jquery.com/attr/

 

##.attr()、.prop()源码

.attr()内部是通过jQuery.attr()实现的，.prop()实现类似，所以这里只简单讲一下jQuery.attr()的实现，如下：

其中，大部分的特性值可通过getAttribute、setAttribute进行获取/设置，部分特殊的，比如href、src、checked等，需要调用相应的hook（钩子，很奇怪的名字）的get、set方法几i女性获取/设置值。

可以参照 http://api.jquery.com/attr/ 对.attr() 这个API的讲解，并结合断点调试来理解下面的源码。体力活，不赘述~~

```
    attr: function( elem, name, value ) {
        // 这里一坨代码可以先直接忽视，不影响下面主要逻辑，...代表被忽略的代码
        // ...

        // All attributes are lowercase
        // Grab necessary hook if one is defined
        if ( notxml ) {
            name = name.toLowerCase();
            // 这里几种情况：
            // 1、一些特殊的特性，如href、width等=>attrHooks
            // 2、一些值为Boolean的属性，如checked等=>boolHook
            // 3、其他：nodeHook，主要是针对IE6/7的bug
            hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
        }

        if ( value !== undefined ) {    //设置节点特性，包括：
                                        //$(node).attr('nick','casper') 
                                        //或 $(node).attr({'nick':'casper', 'age':100})
                                        //或 $(node).attr('nick', null)

            if ( value === null ) {    // 删除
                jQuery.removeAttr( elem, name );

            } else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
                return ret;    // 一些特殊的特性，比如href、src等，有专门的set方法

            } else {    // 普通的setAttribute
                elem.setAttribute( name, value + "" );
                return value;
            }

        } else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
            // 获取特性值，且该特性有对应的hook~
            return ret;

        } else {    // 普通的获取特性值

            // In IE9+, Flash objects don't have .getAttribute (#12945)
            // Support: IE9+
            if ( typeof elem.getAttribute !== core_strundefined ) {
                ret =  elem.getAttribute( name );
            }

            // Non-existent attributes return null, we normalize to undefined
            return ret == null ?
                undefined :
                ret;
        }
    }
```

参考连接：

[http://stylechen.com/attribute-property.html](http://stylechen.com/attribute-property.html)

[http://api.jquery.com/attr/](http://api.jquery.com/attr/)
