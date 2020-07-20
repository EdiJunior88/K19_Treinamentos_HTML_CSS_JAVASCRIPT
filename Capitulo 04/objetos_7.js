//Referências
//Se uma propriedade for adicionada a um objeto, ela também será adicionada a todos os objetos que o utilizam como protótipo.

var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

var novo_curso = Object.create(curso);

curso.carga_horaria = 36;

//imprime K11
console.log(novo_curso.sigla);

//imprime Orientação a Objetos em Java
console.log(novo_curso.nome);

//imprime 36
console.log(novo_curso.carga_horaria);