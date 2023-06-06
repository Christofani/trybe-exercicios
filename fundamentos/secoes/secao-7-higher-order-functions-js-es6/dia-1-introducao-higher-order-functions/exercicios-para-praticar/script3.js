const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaPontos = (pontosCertos, pontosEstudante) => {
    if (pontosCertos === pontosEstudante) {
        return 1;
    } if (pontosCertos === 'N.A') {
        return 0
    }
    return -0.5;
}

const result = (pontosCertos, pontosEstudante, action) => {
    let contador = 0;
    for (let index = 0; index < pontosCertos.length; index += 1) {
        const returnAction = action(pontosCertos[index], pontosEstudante[index]);
        contador += returnAction;
    }
    return `Resultado Final ${contador} pontos!`
}

console.log(result(RIGHT_ANSWERS,STUDENT_ANSWERS, comparaPontos));