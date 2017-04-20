// getter setter
const NAME = Symbol('name');
const INDEX = Symbol('index');

class Person {
    constructor (name) {
        this[NAME] = name;
        this[INDEX] = 0;
    }

    get name () {
        return this[NAME].toUpperCase();
    }

    set name (value) {
        this[NAME] = [++this[INDEX], value].join(': ');
    }
}

let p = new Person('Allen Black');
console.log(p.name);  // ALLEN BLACK

p.name = 'Tom Green';
console.log(p.name);  // 1: TOM GREEN