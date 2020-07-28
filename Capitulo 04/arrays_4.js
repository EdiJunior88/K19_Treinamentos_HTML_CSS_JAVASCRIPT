//Removendo Elementos
//O método delete() permite remover elementos de um array.

var cursos = ["K01", "K02", "K03"];

delete cursos[0];
//[undefined, "K02", "K03"]

for (var i = 0; i < cursos.length; i++){
    console.log(cursos[i]);
}