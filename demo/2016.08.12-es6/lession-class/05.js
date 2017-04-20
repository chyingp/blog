// 继承
class Person {
    constructor (name, gender) {
        this.name = name;
        this.gender = gender;
    }

    toString () {
        return `name: ${this.name}, gender: ${this.gender}`;
    }
}

class Student extends Person {
    constructor (name, gender, id) {
        super(name, gender);
        this.id = id;
    }

    toString () {
        return `name: ${this.name}, gender: ${this.gender}, id: ${this.id}`;
    }
}

let s = new Student('Tom', 'man', '1001');
console.log( s.toString() );  // name: Tom, gender: man, id: 1001

