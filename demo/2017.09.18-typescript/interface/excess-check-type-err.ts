interface Person {
  nick: string;
}

function printPerson(person: Person): void {
  console.log(person.nick);
}

// Argument of type '{ nikc: string; }' is not assignable to parameter of type 'Person'.
// Object literal may only specify known properties, and 'nikc' does not exist in type 'Person'.
printPerson({nikc: 'chyingp'});