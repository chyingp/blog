interface Person {
  nick: string;
}

function printPerson(person: Person): void {
  console.log(person.nick);
}

// 正常
let person = {nick: 'chyingp', school: 'sysu'};
printPerson(person);

// 报错
// Type '{ nick: string; school: string; }' is not assignable to type 'Person'.
// Object literal may only specify known properties, and 'school' does not exist in type 'Person'.
// let person: Person = {nick: 'chyingp', school: 'sysu'};
// printPerson(person);