const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade.toLowerCase === 'Aprovado');

console.log(verifyGrades);

//Só retorna true quando todos os valores atendem a uma certa condição ;
//Ao utilizar o Object.values, o retorno será um array com os valores das chaves do objeto grades como ['Aprovado', 'Reprovado', 'Aprovado'];

//De olho na dica 👀: para manter seu código conciso e evitar que erros aconteçam, você pode utilizar o método toLowerCase() para deixar todos os itens do array com letras minúsculas. Por exemplo: grade.toLowerCase() === 'aprovado'