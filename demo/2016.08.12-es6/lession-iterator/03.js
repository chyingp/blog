let persons = new Set(['Tom', 'Green', 'Kate']);
for(let name of persons) {
    console.log(name);
}
// Tom
// Green
// Kate

let map = new Map();
map.set('nick', 'chyingp');
map.set('gender', 'man');

for(let [key, value] of map) {
    console.log('key:%s, value:%s', key, value);
}
// key:nick, value:chyingp
// key:gender, value:man