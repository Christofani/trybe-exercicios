const novasPessoas = (nameCompleto) => {
    const email = nameCompleto.toLowerCase().replace(' ', '_');
    return {nameCompleto, email: `${email}@trybe.com`};
}

const newEmployees = (minhaFuncao) => {
    const employees = {
      id1: minhaFuncao('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: minhaFuncao('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: minhaFuncao('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(novasPessoas));