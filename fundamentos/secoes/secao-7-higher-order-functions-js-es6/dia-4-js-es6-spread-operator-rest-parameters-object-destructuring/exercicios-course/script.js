const arrayC = ['bolsa', 'blusa', 'calça'];

const adicionaItem = [...arrayC, 'sapato']

console.log(adicionaItem);

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...spring,...summer,...fall,...winter];
console.log(months);