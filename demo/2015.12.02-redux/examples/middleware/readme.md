## 例子说明

首先安装依赖项

```
npm install
```


然后，在当前目录运行如下脚本，看下控制台输出。

```
node app.js
```


`async-actions`里的例子，看到输出是


```
dispatching { type: 'add_todo', text: '吃早餐' }
[ { text: '吃早餐', completed: false } ]
next state [ { text: '吃早餐', completed: false } ]
dispatching function (dispatch){
        setTimeout(function(){
            dispatch(addTodo(text));
        }, 1000);       
    }
next state [ { text: '吃早餐', completed: false } ]
dispatching { type: 'add_todo', text: '上班' }
[ { text: '吃早餐', completed: false },
  { text: '上班', completed: false } ]
next state [ { text: '吃早餐', completed: false },
  { text: '上班', completed: false } ]
```