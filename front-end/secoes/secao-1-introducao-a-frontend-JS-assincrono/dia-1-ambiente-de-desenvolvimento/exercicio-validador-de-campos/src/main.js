import  validator  from "validator";

const buttonValidator = document.querySelector('#validator');
const selectValidator = document.querySelector('#valid');
const valueInserid = document.querySelector('#value');
const explicationParagraf = document.querySelector('#explication');

buttonValidator.addEventListener('click', (event) => {
 event.preventDefault();
 const campos = {
  cpf: validator.isTaxID(valueInserid.value, 'pt-BR'),
  email: validator.isEmail(valueInserid.value),
  uuid: validator.isUUID(valueInserid.value, 4),
  url: validator.isURL(valueInserid.value),
  hexColor: validator.isHexColor(valueInserid.value),
 };

 explicationParagraf.innerHTML = `A validação retornou ${campos[selectValidator.value]}`
});