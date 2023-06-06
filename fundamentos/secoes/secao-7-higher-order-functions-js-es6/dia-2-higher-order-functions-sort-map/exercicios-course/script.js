const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //A lógica é a seguinte: a função sort recebe todos os elementos do array e realiza a comparação de cada um deles em pares (elemento1, elemento2). Se a operação elemento1 - elemento2 der resultado negativo, o elemento1 vai para trás. Caso contrário, vai para frente.Se você precisar utilizar a forma decrescente, basta inverter a operação elemento1 - elemento2 por elemento2 - elemento1, como mostra o código abaixo

const inventory2 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// troca a operação para b - a
inventory2.sort((a, b) => b - a);
console.log(inventory2); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

