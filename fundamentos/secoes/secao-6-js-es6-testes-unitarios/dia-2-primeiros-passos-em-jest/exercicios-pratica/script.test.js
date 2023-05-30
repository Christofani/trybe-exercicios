const {removeItem, myFizzBuzz} = require('./script');

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
