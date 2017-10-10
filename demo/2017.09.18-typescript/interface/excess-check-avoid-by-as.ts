interface Person {
  nick: string;
}

function printPerson(person: Person) {
  console.log(person.nick);
}

printPerson({ nick: 'chyingp', school: 'sysu' } as Person);
