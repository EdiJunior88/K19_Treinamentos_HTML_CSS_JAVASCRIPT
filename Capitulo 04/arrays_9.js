//Removendo o Primeiro Elemento
//O método shift() remove e retorna o primeiro elemento de um array.

var cursos = ["K01", "K02", "K03"];

var curso = cursos.shift();
//["K02", "K03"]

console.log("Elemento removido: " + curso);

for (var i = 0; i < cursos.length; i++){
    console.log(cursos[i]);
}