const readline = require('readline-sync');

const {allNames , removeIds , personId, fileNow,addPerson, replaceNelson } = require('./simpsons.js');

async function main() {
//   const idquestion = readline.questionInt('Qual o Id do personagem ? ');
//  await allNames();
//  const person = await personId(idquestion);
//  console.log(person);
const newFile = await fileNow();
const addNelson = await addPerson();
const addMeggie = await replaceNelson();
}

main();