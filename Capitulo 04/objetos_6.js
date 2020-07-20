//Referências
//Também podemos utilizar o método create de Object para criar objetos baseados em objetos existentes. Veja o exemplo abaixo.

//criando um objeto com duas propriedades
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

//criando um objeto sem propriedades
var novo_curso = {};

//definindo o primeiro objeto como protótipo do segundo
novo_curso = Object.create(curso);

//imprime K11
console.log(novo_curso.sigla);

//imprime Orientação a Objetos em Java
console.log(novo_curso.nome);