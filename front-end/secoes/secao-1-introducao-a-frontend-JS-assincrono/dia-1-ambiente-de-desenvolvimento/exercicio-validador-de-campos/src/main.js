import validator from 'validator';
import './style.css';

const buttonValidator = document.querySelector('#validator');
const selectValidator = document.querySelector('#valid');
const valueInserid = document.querySelector('#value');
const explicationParagraf = document.querySelector('#explication');
const UUID_VERSION = 4;

buttonValidator.addEventListener('click', (event) => {
  event.preventDefault();
  const campos = {
    cpf: validator.isTaxID(valueInserid.value, 'pt-BR'),
    email: validator.isEmail(valueInserid.value),
    uuid: validator.isUUID(valueInserid.value, UUID_VERSION),
    url: validator.isURL(valueInserid.value),
    hexColor: validator.isHexColor(valueInserid.value),
  };

  explicationParagraf.innerHTML = `A validação retornou ${campos[selectValidator.value]}`;
});
