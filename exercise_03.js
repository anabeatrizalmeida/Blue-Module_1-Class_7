let lista = [];

let contador = 0;

while (contador < 20){
    let num = Math.floor(Math.random() * 101);
    lista.push(num);
    contador = contador + 1;
}

lista.sort(function(a,b){
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(lista);