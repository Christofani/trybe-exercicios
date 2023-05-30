const studentRegister = (name, age) => {
    // seu código aqui
    try {
        validaDados(name, age);
        validaIdade(age);
        return `${name}, boas vindas a AUtrybe!`
    } catch (error) {
        return error.message;
    }
}

const validaDados = (name, age) => {
    if (!name || !age) {
        throw new Error('Todos os dados são necessários')
    }
};

const validaIdade = (age) => {
    if (age < 18) {
        throw new Error('Ops,infelizmente nesse momento você não pode fazer as aulas');
    }
};
console.log(studentRegister("Carlos", 18)); // Fluxo completo
console.log(studentRegister("Carlos", 12)) // Fluxo de exceção
console.log(studentRegister("Renan")) // Fluxo de exceção
