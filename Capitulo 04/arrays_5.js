//Concatenando Arrays
//O método concat() permite concatenar dois arrays.

var formacaoBasica = ["K01", "K02", "K03"];
var formacaoJava = ["K11", "K12"];

var formacaoCompleta = formacaoBasica.concat(formacaoJava);
//["K01", "K02", "K03", "K11", "K12"]

for(var i = 0; i < formacaoCompleta.length; i++){
    console.log(formacaoCompleta[i]);
}