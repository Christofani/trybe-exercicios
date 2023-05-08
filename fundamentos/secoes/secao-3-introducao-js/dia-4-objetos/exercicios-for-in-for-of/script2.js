let food = ['hambúrguer', 'bife', 'acarajé'];

for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;Ao percorrer um objeto, também se tem o mesmo resultado. O for/in percorrerá a chave da propriedade declarada, e não o valor em si.

  let food1 = ['hambúrguer', 'bife', 'acarajé'];
  for (let value of food1) {
    console.log(value);
  };
  //resultado: hambúrguer, bife, acarajé;