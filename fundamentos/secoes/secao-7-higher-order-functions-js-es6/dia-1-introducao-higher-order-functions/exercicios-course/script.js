// const pessoasAprovadas = ['Rodrigo','karina','guilherme','clayton'];

// for (let index = 0; index < pessoasAprovadas.length; index += 1) {
//     pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase();
// }
// console.log(pessoasAprovadas);

const button = document.querySelector('#signup-button');

// button.addEventListener('click', () => {
//   console.log('Registrado com sucesso!');
// });

const resgisterUser = () => {
    console.log('Registrado com sucesso!')
}
button.addEventListener('click', resgisterUser);