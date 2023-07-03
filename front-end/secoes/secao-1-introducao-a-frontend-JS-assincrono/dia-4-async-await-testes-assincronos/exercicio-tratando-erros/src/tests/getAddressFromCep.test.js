import  getAddresFromCep  from "../getAddressFromCep.js";

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados!', () => {
  test('Deve retornar os dados quando passamos um CEP válido', async () => {
    const address = await getAddresFromCep('04182020')

    expect(address.cep).toBe('04182-020');
    expect(address.logradouro).toBe('Avenida General Leite de Castro');
    expect(address.bairro).toBe('Jardim Santa Cruz (Sacomã)');
    expect(address.localidade).toBe('São Paulo');
  });
  test('Deve aceitar ceps com ou sem hífen', async () => {
    const firstAddress = await getAddresFromCep('04182020');
    expect(firstAddress.cep).toBe('04182-020');

    const secondAddress = await getAddresFromCep('04182-020');
    expect(secondAddress.cep).toBe('04182-020');
  });
});

describe('Quando a requisição é rejeitada , deve retornar um erro', () => {
  test('deve retornar um erro com a mensagem "Você precisa passar um CEP" ao não passar um cep', async () => {
    const expectError = new Error('Você precisa passar um CEP');
    await expect(getAddresFromCep()).rejects.toThrow(expectError);
  });
  test('deve lançar um erro quando passar um cep em formato inválido.', async () => {
    const invalidCep = 'XXXXX-XXX';
    const inValidCepLessDigits = "00000-00"
    const moreDigits = '00000-0000'
    await expect(getAddresFromCep(invalidCep)).rejects.toThrow();
    await expect(getAddresFromCep(inValidCepLessDigits)).rejects.toThrow();
    await expect(getAddresFromCep(moreDigits)).rejects.toThrow();
  });
});

//deve retornar os dados quando passamos um cep válido
// deve retornar ceps com ou sem hifén
// deve retornar um erro com a mensagem "Você precisa passar um CEP" ao não passar um cep 
//deve lançar um erro quando passar um cep em formato inválido.

