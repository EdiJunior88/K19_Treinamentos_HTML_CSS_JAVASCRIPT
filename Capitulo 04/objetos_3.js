//Alterando o valor de uma propriedade
//Para alterar o valor de uma propriedade, basta atribuir um novo valor à propriedade do objeto.

var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

curso.sigla = "K12";
curso.nome = "Desenvolvimento Web com JSF2 e JPA2";

console.log(curso.sigla);
console.log(curso.nome);