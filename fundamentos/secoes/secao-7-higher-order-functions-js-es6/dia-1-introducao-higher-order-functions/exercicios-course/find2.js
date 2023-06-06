const numbers = [19, 21, 30, 3, 45, 22, 15];
const result = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(result)



const names = ['João', 'Irene', 'Fernando', 'Maria'];
// Adicione seu código aqui
const nome5 = names.find((name) => name.length === 5);
console.log(nome5);



const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  // Adicione seu código aqui
 const tituloDaMUsica =  musicas.find((numeracao) => numeracao.id === '31031685').title;

 console.log(tituloDaMUsica);