//Adicionando um Elemento na Primeira Posição
//O método unshift() adiciona elementos na primeira posição de um array.

var cursos = ["K12", "K21", "K22", "K23"];

cursos.unshift("K11");
//["K11", "K12", "K21", "K22", "K23"]

for (var i = 0; i < cursos.length; i++){
    console.log(cursos[i]);
}