interface Person {
  nick: string;
}

function printPerson(person: Person): void {
  console.log(person.nick);
}

// Argument of type '{ nick: string; school: string; }' is not assignable to parameter of type 'Person'.
// Object literal may only specify known properties, and 'school' does not exist in type 'Person'.
printPerson({nick: 'chyingp', school: 'sysu'});