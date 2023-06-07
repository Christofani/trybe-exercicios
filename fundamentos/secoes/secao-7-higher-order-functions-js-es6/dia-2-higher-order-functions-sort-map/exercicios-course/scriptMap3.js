const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];


const produtosJuntos = (listProduct, listPrices) => {
   return listProduct.map((product, index) => ({[product]: listPrices[index]}));
};
const listaDeProdutos = produtosJuntos(products,prices);
console.log(listaDeProdutos);