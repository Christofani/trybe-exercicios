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

for (let index1= 0; index1 < meuArray.length; index1 += 1) {
    Ndivididos = meuArray[index1]
    
    console.log(Ndivididos/2)
}

//Fatorial

let fatorial = 1;

for (let index = 10; index > 0;index -= 1) {
    fatorial *= index;
}
console.log(fatorial)

let palavra = "Tryber"
let palavraInvertida = "";

for (let index = 0; index < palavra.length; index +=1) {
    palavraInvertida += palavra[palavra.length - 1 - index]
}
console.log(palavraInvertida)

//Array de STRINGS

let array = ['java','javascript','python','html','css']

let  menorPav = array[0];
let  maiorPav = array[0];

for (let index =1; index < array.length; index += 1) {
    if (array[index].length > maiorPav.length) {
        maiorPav = array[index];
    }
}

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length < menorPav.length) {
        menorPav = array[index];
    }
}
console.log(maiorPav);
console.log(menorPav);






    




