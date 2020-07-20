//Referências
//Os objetos são acessados através de referências

var curso = {
    sigla: "K11",
    nome: "Orientação a Objetos em Java"
};

//copiando uma referência
var x = curso;

x.sigla = "K12";
x.nome = "Desenvolvimento Web com JSF2 e JPA2";

//imprime K12
console.log(curso.sigla);

//imprime Desenolvimento Web com JFS2 e JPA2
console.log(curso.nome)