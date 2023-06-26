import  getAddresFromCep  from "../getAddressFromCep.js";

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados!', () => {
  test('Deve retornar os dados quando passamos um CEP válido', async () => {
    const address = await getAddresFromCep('04182020')

    expect(address.cep).toBe('04182-020');
    expect(address.logradouro).toBe('Avenida General Leite de Castro');
    expect(address.bairro).toBe('Jardim Santa Cruz (Sacomã)');
    expect(address.localidade).toBe('São Paulo');
  })
});

//deve retornar os dados quando passamos um cep válido
// deve retornar ceps com ou sem hifén
// deve retornar um erro com a mensagem "Você precisa passar um CEP" ao não passar um cep 
//deve lançar um erro quando passar um cep em formato inválido.

