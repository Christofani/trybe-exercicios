function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
    
  }
  imprimeIdade()

    // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
     
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);

      //Modifique a variável para que não ocorra Erro.

      let favoriteFood = 'Lasanha';
      favoriteFood = 'Hambúrguer';
      console.log(favoriteFood);

      //Modifique as concatenações para template literals.
      const name1 = 'Adriana';
      const lastName = 'Soares';
      console.log(`Olá ${name1} ${lastName}`)
      function soma(a,b) {
        let resultado = a + b;
        return resultado;
      }
      let a = 3;
      let b = 5;
      console.log(`O resultado da soma de ${a} + ${b} é ${a+b}`)

      //Transforme a função numeroAleatorio em uma arrow function.