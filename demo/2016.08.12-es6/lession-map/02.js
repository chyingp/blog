let map = new Map();

map.set('nick', 'chyingp')
    .set('gender', 'man')
    .set('school', 'sysu');

for(let key of map.keys()) {
    console.log(key);
}
// nick
// gender
// school

for(let value of map.values()) {
    console.log(value);
}
// chyingp
// man
// sysu

for(let item of map.entries()) {
    console.log(item);
}
// [ 'nick', 'chyingp' ]
// [ 'gender', 'man' ]
// [ 'school', 'sysu' ]

for(let [key, value] of map.entries()) {
    console.log('key:%s, value:%s', key, value);
}
// key:nick, value:chyingp
// key:gender, value:man
// key:school, value:sysu

for(let [key, value] of map) {
    console.log('key:%s, value:%s', key, value);
}
// key:nick, value:chyingp
// key:gender, value:man
// key:school, value:sysu

console.log( map[Symbol.iterator] === map.entries );  // true