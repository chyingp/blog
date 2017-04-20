// static 方法：直接在类上调用，不属于实例方法，可以被子类继承
class Person {
    static greet () {
        console.log('greet from Person');
    }
}

class Student extends Person {
    // ...
}

Person.greet();  // greet from Person
Person.greet();  // greet from Person

class Teacher extends Person {
    static greet () {
        super.greet();
        console.log('greet from Teacher');
    }
}

Teacher.greet();  // greet from Teacher