const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Logica em arrow function;
numbers.forEach((element) => console.log(element * 2));

// Lógica de uma forma em que fica em uma única função;
numbers.forEach((element) => {
    console.log(element * 2)
});

// Lógica onde separamos o callback fo forEach em uma outra função. como no exemplo abaixo;
const multiply = (element) => console.log(element * 2);

numbers.forEach(multiply);
