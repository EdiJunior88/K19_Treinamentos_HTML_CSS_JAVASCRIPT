//Removendo o Último Elemento
//O método pop() remove e retorna o último elemento.

var cursos = ["K01", "K02", "K03"];

var curso = cursos.pop();
//["K01", "K02"]

console.log("Elemento removido: " + curso);

for (var i = 0; i < cursos.length; i++){
    console.log(cursos[i]);
}