import Swal from 'sweetalert2';
import './style.css';

const imagem = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const BASE_API = 'https://akabab.github.io/superhero-api/api';
const MAX_HEROES = 1000;

const randomID = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomID();
  fetch(`${BASE_API}/id/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      imagem.src = data.images.md;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
