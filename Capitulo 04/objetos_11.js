//Removendo uma propriedade
//Podemos remover uma propriedade de um objeto com a função delete

var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

//imprime K11
console.log(curso.sigla);

delete curso.sigla;

//imprime undefined
console.log(curso.sigla);