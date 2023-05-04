let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaValores = 0;



for (let index = 0;index < numbers.length; index += 1){
    // console.log(numbers[index])
    somaValores += numbers[index]
}
console.log(somaValores)

let media = somaValores/ numbers.length
console.log("A média dos valores é: " + media)
if (media > 20) {
    console.log("O valor da média aritmética é maior que 20")
} else {
    console.log("O valor da média aritmética é menor ou igual a 20")
}

//Maior número 

let maiorNumero = numbers[0];

for (let index = 1;index < numbers.length;index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}

 //valores impares 

 let numerosImpares = 0;

console.log("O maior número é : " + maiorNumero)
 
for (let index = 0; index < numbers.length ; index += 1){
     if (numbers[index] % 2 !== 0){
     numerosImpares += 1
     }
}
if (numerosImpares === 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log("Existem " + numerosImpares + " números ímpares")
}

//Menor número 

let menorNumero = numbers[0] ;

for ( let index = 1; index < numbers.length; index += 1) {
   if (numbers[index] < menorNumero) {
    menorNumero = numbers[index]
   }
}
console.log("O menor número é : " + menorNumero )

let meuArray = [];

for (let index = 1; index <= 25; index += 1) {
    meuArray.push(index);
}
console.log(meuArray)

for (let index = 0; index < meuArray.length; index += 1) {
     let numerosdiv = meuArray[index] / 2
     console.log(numerosdiv)
}



    




