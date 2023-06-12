// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
//   };

// const { name,seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller);


// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };

const { name, age, homeWorld: {name: planetName}, description: { jedi } } = character;

console.log(`Esse é o ${name}, ele tem ${age}, anos, mora no planeta ${planetName} e ,por incrível que pareça ${jedi ? 'é um jedi': 'não é um jedi'}.`);