//Copiando um Trecho de um Array
//O método slice() cria uma cópia de uma porção de um array.

var cursos = ["K01", "K02", "K03", "K11", "K12"];

var formacaoBasica = cursos.slice(0,3);
//["K01", "K02", "K03"]

for (var i = 0; i < formacaoBasica.length; i++){
    console.log(formacaoBasica[i]);
}