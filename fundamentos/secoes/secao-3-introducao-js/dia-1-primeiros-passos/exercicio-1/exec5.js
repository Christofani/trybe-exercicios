let lado1 = 60;
let lado2 = 90;
let lado3 = 40;

let soma = lado1 + lado2 + lado3 ;
let ladospositivos = lado1 > 0 && lado2 > 0 && lado3 > 0


if (soma === 180) {
    console.log(true)
} else if (soma > 180){
    console.log(false)
} else if(lado1 < 0 || lado2 < 0 || lado3 < 0){
    console.log("ERRO,número inválido!")
}
