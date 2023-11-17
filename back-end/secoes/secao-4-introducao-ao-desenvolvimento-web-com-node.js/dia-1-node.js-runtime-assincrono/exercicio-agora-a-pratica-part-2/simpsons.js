const fs = require('fs').promises;
const path = require('path');

async function allNames() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsParsed = JSON.parse(simpsons);
  const strings = simpsonsParsed.map(({ id, name }) => `${id} - ${name}`)
  strings.forEach((string) => console.log(string));
}

async function personId(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsParsed = JSON.parse(simpsons);
  const chosenSimpson = simpsonsParsed.find((simpson) => Number(simpson.id) === id)
  if(!chosenSimpson) {
    throw new Error('Id não encontrado!')
  }
  return chosenSimpson;
}

async function removeIds() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsParsed = JSON.parse(simpsons);

  const removeID = simpsonsParsed.filter((simpson) => simpson.id !== '10' && simpson.id !== '6')

  await fs.writeFile('./simpsons.json', JSON.stringify(removeID));
}

const fileNow = async () => {
  try {
    const newFile = await fs.readFile(path.resolve(__dirname, './simpsons.json'))
    const persons =  JSON.parse(newFile)
    const idsFamily = [1, 2, 3, 4]
    const familySimp = persons.filter((simpson) => idsFamily.includes(Number(simpson.id)));
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(familySimp))
  } catch (error) {
    console.error(`Erro ao ler  o arquivo : ${error}`);
  }
}

const addPerson = async () => {
  try {
    const newFile = await fs.readFile('./simpsonFamily.json', 'utf-8')
    const familySimpson =  JSON.parse(newFile);
    familySimpson.push({ id:'8',name:"Nelson Muntz"})
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(familySimpson))
  } catch (error) {
    console.error(`Não deu certo : ${error}`)
  }
}

const replaceNelson = async () => {
  try {
    const newFile = await fs.readFile('./simpsonFamily.json', 'utf-8')
    const familySimpson =  JSON.parse(newFile);
    familySimpson[familySimpson.length - 1] = { id:"5",name:"Maggie Simpson" }
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(familySimpson))
  } catch (error) {
    console.error(`Substituição falhou : ${error}`)
  }
}


module.exports = {
  allNames,
  personId,
  removeIds,
  fileNow,
  addPerson,
  replaceNelson
}