var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

var novo_curso = Object.create(curso);

//exibe K11
console.log(novo_curso.sigla);

//exibe Orientação a Objetos em Java
console.log(novo_curso.nome);