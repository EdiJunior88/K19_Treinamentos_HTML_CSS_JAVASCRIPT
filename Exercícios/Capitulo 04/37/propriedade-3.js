var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

var novo_curso = Object.create(curso);

//exibe K11
console.log(novo_curso.sigla);

//exibe Orientação a Objetos em Java
console.log(novo_curso.nome);

curso.sigla = "K12";
curso.nome = "Desenvolvimento Web com JSF2 e JPA2";

//exibe K12
console.log(novo_curso.sigla);

//exibe Desenvolvimento Web com JSF2 e JPA2
console.log(novo_curso.nome);
