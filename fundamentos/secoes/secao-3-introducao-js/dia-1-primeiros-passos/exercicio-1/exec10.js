let custproduct = 12;
let valorproduct = 36;

if (custproduct >=0 && valorproduct >=0) {
    let custoTotalproduct = custproduct * 1.2;
    let lucro = (valorproduct - custoTotalproduct) * 1000;
    console.log(lucro)
} else {
    console.log("Erro, os valores não podem ser negativos")
}