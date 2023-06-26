import Swal from 'sweetalert2';
import getAddressFromCep from './getAddressFromCep';
import './style.css';

const buttonEl = document.querySelector('button').addEventListener('click', handleClick);

export async function handleClick() {
  const cep = document.querySelector('input').value;

  try {
    const adressData = await getAddressFromCep(cep);
    document.querySelector('pre').innerHTML = JSON.stringify(adressData);
  } catch (error) {
    return Swal.fire({
      icon:'Error',
      title: 'Oops...',
      text: error.message,
      confirmButtonText: 'Cool',
    })
  }
}