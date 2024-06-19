const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const array = dados.filter((item) => typeof item !== 'number');
//Pode-se usar de diversas formas o filter!

const listaNumeros = [10, 20, 30, 40];

const lista =listaNumeros.filter((item) => item > 20);
console.log(lista);