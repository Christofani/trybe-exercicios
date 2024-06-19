
const product = {
    id: 1,
    name: 'Camiseta',
};

const productPrice = {
  price: 23
}

const productComplete = {...product,...productPrice}
console.log(productComplete);