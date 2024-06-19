let fruta = [3,4,10,1,12];
let somavalores = 0;

for (let contador = 0; contador < fruta.length;contador += 1) {
    // console.log(contador)
    somavalores += fruta[contador];
}

if(somavalores > 15) {
    console.log(somavalores)
} else {
    console.log("Valor menor que 16")
}