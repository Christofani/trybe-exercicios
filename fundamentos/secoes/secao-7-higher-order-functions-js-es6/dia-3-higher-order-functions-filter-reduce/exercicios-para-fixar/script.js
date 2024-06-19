const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const SomandoPares = numbers.filter((number) => number % 2 === 0)
    .reduce((acc, curr) => acc + curr);
console.log((SomandoPares));

const somandoPares = numbers.reduce((acc, curr) => (curr % 2 === 0) ? acc + curr: acc);
console.log(somandoPares);