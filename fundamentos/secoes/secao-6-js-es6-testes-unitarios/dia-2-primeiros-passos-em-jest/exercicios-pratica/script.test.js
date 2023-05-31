const {removeItem, myFizzBuzz, encode , decode, techList, hydrate} = require('./script');

describe('testa a função removeItem', () => {
    test('Deve retornar o array removendo o item correto.', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('testa a função myFizzBuzz', () => {
    test('Retorna o numero caso ele corresponda ao requisito', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(2)).toBe(2);
        expect(myFizzBuzz('2')).toBeFalsy();
    });
});

describe('teste as funções encode e decode', () => {
    test('Verifique se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    test('Em encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
        expect(encode('ana')).toEqual('1n1');
        expect(encode('troll')).toEqual('tr4ll');
        expect(encode('ellen')).toEqual('2ll2n');
        expect(encode('ivinis')).toEqual('3v3n3s');
        expect(encode('hurus')).toEqual('h5r5s');
    });
    test('Em decode teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
        expect(decode('1n1')).toEqual('ana');
        expect(decode('tr4ll')).toEqual('troll');
        expect(decode('2ll2n')).toEqual('ellen');
        expect(decode('3v3n3s')).toEqual('ivinis');
        expect(decode('h5r5s')).toEqual('hurus');
    });
    test('Teste se a string que é retornada tem o mesmo número de chars que a string passada como paramêtro', () => {
        expect(encode('trybe').length).toEqual(5);
        expect(decode('trybe').length).toEqual(5);
    })
    test('As funções encode e decode são definidas', () => {
        expect(encode).toBeDefined();
        expect(decode).toBeDefined();
    });
});

describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });

  describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cerveja e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });
