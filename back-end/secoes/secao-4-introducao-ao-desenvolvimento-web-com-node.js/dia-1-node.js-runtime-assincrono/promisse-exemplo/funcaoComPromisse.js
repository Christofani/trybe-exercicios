function calcularDivisao(num1, num2) {
  const promisse = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não pode dividir o número por zero'));

    const resultado = num1 / num2;

    resolve(resultado);
  });

  return promisse;
}

calcularDivisao(2,1)
  .then((result) => console.log("Resutado : %s", result))
  .catch((error) => console.log("erro : %s", error.message));