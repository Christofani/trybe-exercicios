import { User } from "./src/types/User"

const firstName: string = 'Rodrigo';
const age: number = 30;
const brazilian: boolean = false;
console.log(firstName);
console.log(age);
console.log(brazilian);


function greet(name: string): void {
  console.log(`Olá ${name.toUpperCase()}!`);
}



function getFavoriteNumber(): number {
  return 26;
}

console.log(getFavoriteNumber());




const eveNumbers: number[] = [2,4,6];
const vowel: string[] = ['a','b','c'];
const booleanValues: boolean[] = [true, false];

eveNumbers.push(8);

console.log(eveNumbers);

function printId(id: number | string) {
  console.log(`your ID is : ${id}`);
}

printId(101);
printId('202');



function printPersonalInfo(data: User) {
  console.log(`${data.name} was born in ${data.age}`);
}

printPersonalInfo({name: 'Rodrigo', age: 25})

const person = {
  fistName: 'Frodo',
  lastName: 'Baggins',
  age: 52,
}

function getFullName(firstName: string, lastName: string): string {
  return firstName + ' ' + lastName;
}

console.log(getFullName(person.fistName, person.lastName)); // "Frodo Baggings"

