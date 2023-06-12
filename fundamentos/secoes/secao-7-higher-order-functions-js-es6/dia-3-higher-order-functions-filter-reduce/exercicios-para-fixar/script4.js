const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;
const arrayLetras = names.join('').toLowerCase().split('')
const countA = () => arrayLetras
    .reduce((acc, curr) => (curr === 'a') ? acc +=1: acc,0);
console.log(countA());