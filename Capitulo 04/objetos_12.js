//Verificando a existência de uma propriedade
//Podemos verificar se uma propriedade existe, podemos utilizar a função in

var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

//imprime true
console.log("sigla" in curso);

//imprime false
console.log("carga_horaria" in curso);