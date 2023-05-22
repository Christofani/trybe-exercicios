localStorage.setItem('filme',"the Lion King")
let recovery = localStorage.getItem("filme")
console.log(recovery);
console.log( typeof recovery);

// ---

localStorage.setItem('number', 10);
let recovery2 = JSON.parse(localStorage.getItem('number'));
console.log(recovery2);
console.log( typeof recovery2);

// ---

const filmefavo = {
    filme: "madagascar"
}

localStorage.setItem('objeto', JSON.stringify(filmefavo))
let recovery3 = JSON.parse(localStorage.getItem('objeto')); // getitem recupera oque temos no localStorage
console.log(recovery3);
console.log(typeof recovery3);