let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionacliente(cliente){
    if (typeof cliente === "string") {
        clientesTrybeBank.push(cliente)
        return 'Cliente adicionada(o) com sucesso!'
    
    } else {
        return 'O paramêtro passado deve ser do tipo "string".'
    }
}

console.log(adicionacliente('Maria'))
console.log(adicionacliente(true))
console.log(adicionacliente(54))

//Remove clientes

function removeclientes(cliente){
    let clienteencontrado = false;
    if (typeof cliente === "string"){
    for (let index = 0; index < clientesTrybeBank.length; index += 1){
        if (cliente === clientesTrybeBank[index]){
            clientesTrybeBank.splice(index,1);
            clienteencontrado = true ;
            return 'Cliente excluida(o) com sucesso!'
        }
    }
    if (clienteencontrado === false){
        return 'Cliente não encontrada(o)'
    }

    } else {
        return 'O parametro passado deve ser do tipo "string".'
    }
}
console.log(removeclientes('Maria'))
console.log(removeclientes(false))
console.log(removeclientes("stanley"))
console.log(removeclientes(54))