// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000)
  });

  resolvedPromise().then((response) => {
    console.log(`O número gerado é ${response}`);
  })

  // promise rejeitada retornando um objeto de erro
  const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });
  rejectedPromise()
  .then((response) => {
    console.log(`O número gerado é ${response}`);
  })
  .catch((error) => {
    console.log(error.message)
  })


  const randomPromise = () => 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if (randomNumber % 2 === 0) {
          resolve(randomNumber);
        } else {
          reject(new Error(`O numero ${randomNumber} não é válido.Somente numeros pares`));
        }
      }, 1000);
    });
  
  randomPromise()
  .then(response => {
    console.log(`Promisse resolvida . O número gerado é ${response}`);
  })
  .catch((error) => {
    console.log(`Promisse rejeitada. ${error.message}`);
  })
  
  // Anota aí 📝: Repare que podemos retornar qualquer valor usando a função reject,
  //  mas geralmente é uma boa prática retornar um objeto de erro.