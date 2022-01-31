var prompt  = require(`prompt-sync`)();

let notas = [];
let reprovado = [];
let recuperacao = [];
let aprovado = [];

let contador=0;
let numeroNotas = +prompt(`Digite o numero de notas: `);
while (contador < numeroNotas){
    const nota = +prompt(`Digite as notas dos alunos: `);
    notas.push(nota);
    contador = contador +1;

    let valor = notas.pop();

    if (valor >= 7){
        aprovado.push(valor);
    } else if (valor < 5){
        reprovado.push(valor);
    }else if (5 <= valor < 7 ){
        recuperacao.push(valor);
    }
}


console.log(aprovado.length);
console.log(recuperacao.length);
console.log(reprovado.length);
