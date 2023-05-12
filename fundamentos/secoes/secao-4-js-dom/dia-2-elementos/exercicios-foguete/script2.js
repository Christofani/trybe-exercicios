const pai = document.querySelector('#pai');
const novoElemento = document.createElement('section');
novoElemento.id = 'segundo irmão'
pai.appendChild(novoElemento);

const filhoDoPai = document.querySelector('#elementoOndeVoceEsta');
const filhoDoFIlhoDoPai = document.createElement('section');
filhoDoFIlhoDoPai.id = 'filhoAdotivo'
filhoDoPai.appendChild(filhoDoFIlhoDoPai)

const paiNovo = document.querySelector('#primeiroFilhoDoFilho');
const novoFilhoDoPaiNovo = document.createElement('section');
novoFilhoDoPaiNovo.id = 'Filho do primeiro filho do filho';
paiNovo.appendChild(novoFilhoDoPaiNovo);

const AcessoaoTerceiroFilho = novoFilhoDoPaiNovo.parentElement.parentElement.nextElementSibling
console.log(AcessoaoTerceiroFilho);