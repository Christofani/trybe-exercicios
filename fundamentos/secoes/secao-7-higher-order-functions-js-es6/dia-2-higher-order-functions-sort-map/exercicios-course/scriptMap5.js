const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

pessoas.forEach((pessoas) => console.log(`Nome: ${pessoas.nome}`));
pessoas.find((pessoa) => pessoa.name === 'Aline');
pessoas.some((pessoa) => pessoa.idade >= 30);
pessoas.every((pessoa) => pessoa.idade > 30);
pessoas.sort((p1, p2) => p1.idade - p2.idade);
 const nomes = pessoas.map((pessoa) => pessoa.nome);
console.log(nomes);