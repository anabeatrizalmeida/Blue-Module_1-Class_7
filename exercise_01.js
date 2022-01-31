var prompt  = require(`prompt-sync`)();

let lista = [];
let listaPar = [];
let listaImpar = [];
let inteiro = parseInt(+prompt("Digite um número inteiro: "));
let contador = 0;

while (contador < inteiro) {
    contador = contador + 1;
    lista.push(contador);
}

while (lista.length != 0){
    numero = lista.pop();
    if (numero%2 == 0){
        listaPar.push(numero);
    } else {
        listaImpar.push(numero);
    }
}


console.log(listaPar);
console.log(listaImpar);