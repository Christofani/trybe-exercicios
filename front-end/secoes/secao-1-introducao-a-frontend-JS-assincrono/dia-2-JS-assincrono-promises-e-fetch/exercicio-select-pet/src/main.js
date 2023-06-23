import './style.css';

const buttonCat = document.querySelector('#button-cat');
const buttonDog = document.querySelector('#button-dog');
const buttonSurprise = document.querySelector('#surprise-me');
const petImage = document.querySelector('#pet-image')

buttonDog.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const petURl = data.message;
      petImage.src = petURl
    })
});

buttonCat.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then(([data]) => {
      const petUrl = data.url;
      petImage.src = petUrl
    })
});

buttonSurprise.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://api.thecatapi.com/v1/images/search'),
  ])
  .then(response => response.json())
  .then((data) => {
    const petURL = data.message || data[0].url;
    petImage.src = petURL;
  })
})