const { expect } = require('chai');

const calculaSituacao = require('../../src/index');

describe('Verifica se a média for maior que 7', () => {
 it('Retorna aprovado', () => {
    const resultado = calculaSituacao(9);
    
    expect(resultado).to.be.equals('aprovação');
 });
});