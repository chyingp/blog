let count = 1;

class Person {
    constructor (name) {
        count++;
        this.name = name;  // 实例属性
    }

    greet () {  // 实例属性
        console.log('hello');
    }

    static count () {  // 静态方法
        return count;
    }
}

Person.prop = 'static prop';  // 静态属性

console.log('静态属性：%s', Person.prop);
console.log('静态方法：%s', Person.prop);

var p = new Person('xiaoming');

console.log('实例属性：%s', p.name);
console.log('实例方法：%s', p.greet);