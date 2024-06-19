const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verificaPrimeiraLetra = (letra, names) => names.some((name) => name[0] === letra);

console.log(verificaPrimeiraLetra('M', listNames));
console.log(verificaPrimeiraLetra('L', listNames));