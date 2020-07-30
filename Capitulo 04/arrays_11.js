//Removendo e Adicionando Elementos em um Array
//O método splice() permite remover elementos do array e adicionar novos elementos.

var cursos = ["K11", "K12", "K21", "K22", "K23"];

cursos.splice(2, 3, "K31", "K32");
//["K11", "K12", "K31", "K32"]

for (var i = 0; i < cursos.length; i++){
    console.log(cursos[i]);
}