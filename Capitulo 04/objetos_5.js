//Referências
//Podemos criar um objeto baseado em outro objeto existente (protótipo). Para isso, podemos utilizar a propriedade especial __proto__. Observe o código abaixo.

//criando um objeto com duas propriedades
var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

//criando um objeto sem propriedades
var novo_curso = {};

//definindo o primeiro objeto como protótipo do segungo
novo_curso.__proto__ = curso;

//imprime K11
console.log(novo_curso.sigla);

//imprime Orientação a Objetos em Java
console.log(novo_curso.nome);