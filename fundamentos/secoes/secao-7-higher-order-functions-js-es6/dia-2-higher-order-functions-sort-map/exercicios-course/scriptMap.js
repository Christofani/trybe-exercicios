const pessoas = ['rodrigo', 'karina', 'gustavo', 'claudio'];

const novasPessoas = pessoas.map((element) => {
    const registro = {};
    registro.nome = element;
    registro.empresa = 'Trybe';
    return registro;
});

console.log(novasPessoas);