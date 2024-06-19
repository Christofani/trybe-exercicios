const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => (acc + curr),0);
}
console.log(sum(10,15,25,35));