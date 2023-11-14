const readline = require('readline-sync');
const {BMI_MAX_AND_MIN} = require('../utils/situacionIMC')

const weight = readline.questionInt('What is your weight ? (Kg)');
  const height = readline.questionFloat('What is your height ? cm)');

function calcImc(weight, height) {
  console.log(`Weight: ${weight} e Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters * heightInMeters;

  const bmi = weight / heightSquared;

  return bmi.toFixed(2);
}

function BMIResult(bmi) {
  const status = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = status.find((status) => {
    const {maxBMI, minBMI} = BMI_MAX_AND_MIN[status];
    return bmi >= minBMI && bmi <= maxBMI;
  })
  return resultFind;
}

function main() {
  const bmi = calcImc(weight, height);
  const bmiresult = BMIResult(bmi);
  console.log(`Your BMI is ${bmi}, Are you : ${bmiresult}`);
}

main();