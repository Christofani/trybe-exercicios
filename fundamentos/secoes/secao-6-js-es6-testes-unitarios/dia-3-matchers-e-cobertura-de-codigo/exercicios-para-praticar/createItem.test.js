const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
   const itemAtual = createItem('banana', 'kg', 1.99, 20);
   const itemExpected = {
    name: 'banana',
    unit: 'kg',
    price: 1.99,
    quantity: 20
   }
   expect(itemAtual).toEqual(itemExpected);
  });
  it('utiliza zero como quantidade padrão', () => {
    const itemAtual = createItem('banana', 'kg', 1.99);
    expect(itemAtual).toHaveProperty('quantity', 0)
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow(Error)
  });
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});