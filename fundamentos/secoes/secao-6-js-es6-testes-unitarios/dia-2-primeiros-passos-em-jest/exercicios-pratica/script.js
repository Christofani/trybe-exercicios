// removeItem.js

function removeItem(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  // myFizzBuzz.js

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

// encodeDecode.js

const mapString = (objectMap, string) => {
    const splitString = string.split('');
    const mappedArray = [];
  
    for (let index = 0; index < splitString.length; index += 1) {
      const character = splitString[index];
      const mappedValue = objectMap[character];
      
      if (mappedValue) {
        mappedArray.push(mappedValue);
      } else {
        mappedArray.push(character);
      }
    }
  
    return mappedArray.join('');
  }
  
  const encode = (string) => {
    const map = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    return mapString(map, string);
  }
  
  const decode = (string) => {
    const map = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return mapString(map, string);
  }

  const techList = (array, name) => {
    if (array.length === 0) return 'Vazio!';
    const arrayEmOrdem = array.sort();
    const listaDeTecnologia = [];
    for (let index = 0; index < arrayEmOrdem.length; index += 1) {
      listaDeTecnologia.push({
        tech: arrayEmOrdem[index],
        name: name,
      });
    }
    return listaDeTecnologia;
};

const hydrate = (string) => {
  // Dividir a string em um array de caracteres individuais
  const stringSplit = string.split('');
  
  // Inicializar um contador para o número total de copos
  let contadorDeCopos = 0;
  
  // Percorrer cada caractere da string
  for (let index = 0; index < stringSplit.length; index += 1) {
    // Converter o caractere em um número usando parseInt
    const char = parseInt(stringSplit[index]);
    
    // Verificar se o resultado da conversão é um número válido
    if (char) {
      // Se for um número válido, adicionar o valor ao contador de copos
      contadorDeCopos += char;
    }
  }
  
  // Inicializar a variável do tipo de copo como 'copo'
  let copoDeVidro = 'copo';
  
  // Verificar se o contador de copos é maior que 1
  if (contadorDeCopos > 1) {
    // Se for maior que 1, atualizar a variável para o plural 'copos'
    copoDeVidro = 'copos';
  }

  // Retornar uma string formatada com o número de copos e o tipo de copo
  return `${contadorDeCopos} ${copoDeVidro} de água`;
};


module.exports = {
    removeItem,
    myFizzBuzz,
    encode,
    decode,
    techList,
    hydrate
 };