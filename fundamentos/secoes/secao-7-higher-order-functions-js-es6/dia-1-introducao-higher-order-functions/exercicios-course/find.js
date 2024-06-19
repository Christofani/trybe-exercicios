const employees = [
    { id: 1, nome: 'Douglas Adams', idade: 20},
    { id: 2, nome: 'H. G. Wells', idade: 18},
    { id: 3, nome: 'Júlio Verne', idade: 57},
    { id: 4, nome: 'Margaret Atwood', idade: 83},
    { id: 5, nome: 'Edgar Allan Poe', idade: 19},
  ];
  
//   Por exemplo, considere um array de objetos, onde cada objeto representa uma pessoa colaboradora da sua empresa. A pessoa responsável pelo RH precisa encontrar a pessoa colaboradora de id 2 pois recebeu uma notificação que esta pessoa irá entrar em férias. Sua tarefa é encontrar o nome dessa pessoa colaboradora. Como você faria? 🤔
employees.find((employee) => employee.id === 2).nome;


// Bom, você já descobriu qual o nome da pessoa colaboradora com o id: 2 da nossa lista. Agora a pessoa do RH da empresa precisa saber o id da colaboradora que possui o nome 'Margaret Atwood', pois ela irá ganhar um aumento de salário. Como você pode fazer? 🤔
employees.find((employe) => employe.name === 'Margaret Atwood').id;

const idades = [18,21,42,20,19,21,30,73,82,45,48,50];

idades.find((idade) => idade === 33);