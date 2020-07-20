//Referências
//Por outro lado, alterações nos valores das propriedades de um objeto não afetam o protótipo desse objeto.

var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

var novo_curso = Object.create(curso);

novo_curso.sigla = "K12";
novo_curso.nome = "Desenvolvimento Web com JSF2 e JPA2";

//imprime K11
console.log(curso.sigla);

//imprime Orientação a Objetos em Java
console.log(curso.nome);