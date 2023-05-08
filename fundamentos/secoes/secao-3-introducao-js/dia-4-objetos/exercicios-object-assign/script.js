let person1 = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  let info = {
    age: 23,
    job: 'engenheiro',
  };
  
  let family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person1, info, family)
  console.log(person1)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    let person = {
        name: 'Roberto',
      };
      
      let lastName = {
        lastName: 'Silva',
      };
      
      let clone = Object.assign(person, lastName);
      
      console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
      console.log(person); // { name: 'Roberto', lastName: 'Silva' }

      clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

