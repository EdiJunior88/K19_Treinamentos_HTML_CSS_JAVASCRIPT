//Recuperando o valor de uma propriedade
//Para recuperar os valores das propriedades de um objeto, podemos utilizar o operador “.” ou “[]”. Veja o exemplo a seguir.

var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

console.log(curso.sigla);
console.log(curso["sigla"]);

var sigla = "sigla";
console.log(curso[sigla]);