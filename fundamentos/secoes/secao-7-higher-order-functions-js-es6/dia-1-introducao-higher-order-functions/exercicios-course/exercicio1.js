const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
    //Adicione seu código aqui
const verifyAges = (pessoa, idade) => pessoa.every((maiorIdade) => maiorIdade.age >= idade); 

  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));