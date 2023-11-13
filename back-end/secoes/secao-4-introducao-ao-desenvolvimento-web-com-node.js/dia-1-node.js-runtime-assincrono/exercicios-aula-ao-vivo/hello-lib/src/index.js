const readline = require('readline-sync');
// Const os = require('os');
const fs = require('fs').promises;
const path = require('path');

const name = readline.question('What is your name? ');

console.log(`Hello, ${name}!`);
// Console.log(`Você está usando um computador com o seguinte processador`, os.cpus());
const filePath = path.resolve(__dirname, 'test.json');
console.log(`Arquivo : ${filePath}`);

fs.writeFile(filePath, 'Conteúdo')
	.then(() => console.log('Escrita deu certo'))
	.catch(() => console.log('Escrita deu errado'));
