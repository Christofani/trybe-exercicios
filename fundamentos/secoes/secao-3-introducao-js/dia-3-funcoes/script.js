let saldo = 200;

function somasaldo(valor) {
    return valor + saldo;
}

function tirasaldo(valor) {
    return saldo - valor;
}

function multiplicasaldo(valor) {
    return valor * saldo;
}

function dividesaldo(valor) {
    return saldo / valor;
}

console.log(somasaldo(200))
console.log(tirasaldo(50))
console.log(multiplicasaldo(4))
console.log(dividesaldo(4))