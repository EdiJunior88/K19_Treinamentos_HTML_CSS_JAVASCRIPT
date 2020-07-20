//Criando objetos
//Um objeto pode ser criado de forma literal com a sintaxe JSON. Veja o exemplo a seguir.

var objetoVazio = {};
var curso = {
    sigla: "k11",
    nome: "Orientação a Objetos em Java"
};

//Um objeto pode se relacionar com outros objetos através de propriedades. Observe o código abaixo.

var formacaoJava = {
    sigla: "K10", nome: "Formação Desenvolvedor Java",
    cursos: [
        {
            sigla: "K11",
            nome: "Orientação a Objetos em Java"
        },
        {
            sigla: "K12",
            nome: "Desenvolvimento Web com JFS2 e JPA2"
        },
    ]
}