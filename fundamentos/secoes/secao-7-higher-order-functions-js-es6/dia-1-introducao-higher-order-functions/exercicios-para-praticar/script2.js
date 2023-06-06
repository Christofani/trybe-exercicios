const checkNumber = (mynumber, number) => mynumber === number;

const numeroAleatorio = (mynumber, callBack) => {
    const geraNumeros = Math.floor(Math.random() * 6);
    return callBack(mynumber, geraNumeros)?'Parabéns, você ganhou!':'Tente novamente';
}
console.log(numeroAleatorio(4, checkNumber));