class Foo {
    constructor (...args) {
        this.args = args;
    }

    *[Symbol.iterator]() {
        for(let x of this.args) {
            yield x;
        }
    }
}

let p = new Foo('red', 'yellow', 'blue');
for(let color of p){
    console.log(color);
}

// red
// yellow
// blue