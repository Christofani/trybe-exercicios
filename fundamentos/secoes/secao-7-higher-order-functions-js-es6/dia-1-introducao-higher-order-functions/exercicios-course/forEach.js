const pessoasAprovadoas = ['Ana Beatriz','Rodrigo','Karina','Gustavo'];

pessoasAprovadoas.forEach((nome, index) => {
    pessoasAprovadoas[index] = pessoasAprovadoas[index].toUpperCase();
});

console.log(pessoasAprovadoas);