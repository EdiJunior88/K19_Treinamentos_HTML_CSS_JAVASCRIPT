var formacaoBasica = ["K11", "K12"];
var formacaoJavaAvancado = ["K21", "K22", "K23"];

var formacaoCompleta = formacaoJavaAvancado.concat(formacaoJavaAvancado);

for (var i = 0; i < formacaoCompleta.length; i++){
    console.log(formacaoCompleta[i]);
}