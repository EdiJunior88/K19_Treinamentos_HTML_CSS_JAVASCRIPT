//Referências
//Se o valor de uma propriedade de um objeto for modificado, os objetos que o utilizam como protótipo podem ser afetados.

var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

var novo_curso = Object.create(curso);

curso.sigla = "K12";
curso.nome = "Desenvolvimento Web com JSF2 e JPA2";

//imprime K12
console.log(novo_curso.sigla);

//imprime Desenvolvimento Web com JSF2 e JPA2
console.log(novo_curso.nome);