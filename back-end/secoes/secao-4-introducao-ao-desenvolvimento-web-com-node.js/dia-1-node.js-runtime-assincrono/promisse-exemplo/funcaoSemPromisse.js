function calcularDivisao(num1, num2) {
  if (num2 == 0) throw new Error('Não pode ser feito a divisão');

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(10, 2);
  console.log("resultado: %s",resultado);
} catch (error) {
  console.log("Erro: %s",error.message);
}