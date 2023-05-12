const  comoEsta = document.querySelector('#where-are-you')

const parente = comoEsta.parentElement
parente.style.color = 'blue'

const primeiroFilhoDoFIlho = comoEsta.firstElementChild
primeiroFilhoDoFIlho.innerText = 'First child of child';

const primeiroFilho = parente.firstElementChild

const segundoFilho = comoEsta.previousElementSibling

const atencao = comoEsta.nextSibling

const terceiroFilho = comoEsta.nextElementSibling

const tercFilho = parente.lastElementChild.previousElementSibling
