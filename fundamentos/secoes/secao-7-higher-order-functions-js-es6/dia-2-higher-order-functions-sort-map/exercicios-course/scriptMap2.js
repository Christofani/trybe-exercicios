// const persons = [
//     { firstName: 'Maria', lastName: 'Ferreira' },
//     { firstName: 'João', lastName: 'Silva' },
//     { firstName: 'Antonio', lastName: 'Cabral' },
//   ];

//   const novasPessoas = persons.map((person) => {
//     return `${person.firstName} ${person.lastName}`
//   })

//   console.log(novasPessoas);]




// Vamos praticar um outro exemplo numérico, para fixar bem o que o map faz.
//  Suponha que seja preciso transformar todos os números em negativo e passá-los para um array novo.
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
