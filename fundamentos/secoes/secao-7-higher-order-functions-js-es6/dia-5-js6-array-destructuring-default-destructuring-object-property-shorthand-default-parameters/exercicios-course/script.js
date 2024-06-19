const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

// sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [number1,number2,number3] = primeNumbers;
sum(number1,number3);