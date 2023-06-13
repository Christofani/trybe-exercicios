const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  const {nascimento = '26/05/1998'} = person;
  console.log(nascimento); // Brazilian


//Analogamente, o mesmo pode ser feito na hora de desestruturar um array:
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

  