const readline = require('readline-sync');
const os = require('os');
const fs = require("fs");

const name = readline.question('What is your name? ');

console.log(`Hello, ${name}!`);
console.log(`Você está usando um computador com o seguinte processador`, os.cpus());