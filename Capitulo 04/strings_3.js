//Dividindo uma String
//O método split() cria uma array de strings a partir de um separador.

var curso = "K12 - Desenvolvimento Web com JSF2 e JPA2";
var aux = curso.split("-");

console.log(aux[0]);
console.log(aux[1]);