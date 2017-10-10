interface Person {
  nick?: string;
  gender?: string;
  [propName: string]: any
}

function printPerson(person: Person) {
  console.log(person.nick);
}

printPerson({ nick: 'chyingp', gender: 'man' });
printPerson({ nick: 'chyingp', gender: 'man', school: 'sysu' });