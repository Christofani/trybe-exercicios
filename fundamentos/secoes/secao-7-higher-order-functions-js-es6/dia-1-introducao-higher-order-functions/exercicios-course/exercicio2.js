const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));// não espera retorno;
pessoas.find((pessoa) => pessoa.name === 'Aline');// true
pessoas.some((pessoa) => pessoa.idade > 30); // true
pessoas.every((pessoa) => pessoa.idade > 30); //false