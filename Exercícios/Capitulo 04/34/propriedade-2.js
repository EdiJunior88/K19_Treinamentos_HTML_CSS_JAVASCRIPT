var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

var novo_curso = Object.create(curso);

novo_curso.carga_horaria = 36;

//exibe K11
console.log(curso.sigla);

//exibe Orientação a Objetos em Java
console.log(curso.nome);

//exibe undefined
console.log(curso.carga_horaria);