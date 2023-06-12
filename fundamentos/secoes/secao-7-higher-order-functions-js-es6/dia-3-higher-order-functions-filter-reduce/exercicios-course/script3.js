const numbers = [1, 32, 44, 2, 3];

const totalSum = numbers.reduce((acc, curr) => {
    console.log(`O valor de acc é ${acc} e o valor de curr é ${curr}`);
    return acc + curr;
},30);
console.log(`O valor final de acc é ${totalSum}`);
