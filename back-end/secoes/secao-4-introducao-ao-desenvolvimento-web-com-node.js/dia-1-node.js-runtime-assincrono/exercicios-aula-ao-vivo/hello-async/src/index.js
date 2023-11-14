console.log('hello async');

const fetch = require('node-fetch');
const axios = require('axios').default

const URL_API = 'https://random-data-api.com/api/v2/banks';

const fetchBank = async () => {
  const response =await fetch(URL_API);
  const data = await response.json();
  return data;
}

const fetchBankAxios = async () => {
  const response = await axios.get(URL_API);
  return response.data;
}

const main = async () => {
  const bank = await fetchBank();
  console.log(bank);
  const bankAxios = await fetchBankAxios();
console.log(bankAxios);
}

main();