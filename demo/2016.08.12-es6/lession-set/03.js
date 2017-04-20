var set = new Set(['red', 'yellow', 'blue']);

console.log( set.keys() );  // SetIterator { 'red', 'yellow', 'blue' }
console.log( set.values() );  // SetIterator { 'red', 'yellow', 'blue' }
console.log( set.entries() );  // SetIterator { [ 'red', 'red' ], [ 'yellow', 'yellow' ], [ 'blue', 'blue' ] }

for(let item of set.keys()) {
    console.log(item);
}
// red
// yellow
// blue

for(let item of set.values()) {
    console.log(item);
}
// red
// yellow
// blue

for(let item of set.entries()) {
    console.log(item);
}
// [ 'red', 'red' ]
// [ 'yellow', 'yellow' ]
// [ 'blue', 'blue' ]

for(let item of set) {
    console.log(item);
}
// red
// yellow
// blue

set.forEach((v) => console.log(v));

let set1 = new Set([...set].map(v => v.toUpperCase()));
console.log(set1);  // Set { 'RED', 'YELLOW', 'BLUE' }

let set2 = new Set([...set].filter(v => v !== 'blue' ));
console.log(set2);  // Set { 'red', 'yellow' }