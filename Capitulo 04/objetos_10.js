//Referências
//Considere um objeto que foi construído a partir de um protótipo. Se o valor de uma propriedade
//herdada do protótipo for alterada nesse objeto, ela se torna independente da propriedade no protó-
//tipo. Dessa forma, alterações no valor dessa propriedade no protótipo não afetam mais o valor dela
//no objeto gerado a partir do protótipo.

var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

var novo_curso = Object.create(curso);

novo_curso.sigla = "K12";
novo_curso.nome = "Desenvolvimento Web com JSF2 e JPA2";

curso.sigla = "K21";
curso.nome = "Persistência com JPA2 e Hibernate";

//imprime K12
console.log(novo_curso.sigla);

//imprime Desenvolvimento Web com JSF2 e JPA2
console.log(novo_curso.nome);