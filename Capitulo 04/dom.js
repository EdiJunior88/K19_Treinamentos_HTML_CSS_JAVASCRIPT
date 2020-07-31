//DOM - Document Object Model

/* Os documentos HTML assim como os seus elementos são representados por objetos JavaScript.
Podemos acessar o objeto que representa o documento HTML atual através da variável document.
Os objetos que representam os elementos do documento HTML atual podem ser acessados através
dessa variável. */

//Recuperando elementos
//Podemos buscar elementos HTML por ID através do método getElementById. Esse método devolve null se não existir elemento HTML com o identificador desejado

var elemento = document.getElementById("conteudo");

//Podemos buscar elementos HTML pelo valor do atributo name através do método getElementsByName. Esse método devolve um array com os elementos recuperados

var array = document.getElementsByName("categoria");

//Podemos buscar elementos HTML de um determinado tipo através do método getElementsByTagName. Esse método devolve um array com os elementos recuperados.

var array = document.getElementsByTagName("p");

//Podemos buscar elementos HTML pelo valor do atributo class através do método getElementsByClassName. Esse método devolve um array com os elementos recuperados.

var array = document.getElementsByClassName("confirmado");

/* Podemos buscar elementos HTML utilizando seletores CSS através dos métodos querySelector e querySelectorAll. O primeiro método devolve o primeiro elemento compatível com o
seletor CSS passado como parâmetro. O segundo método devolve um array com todos os elementos compatíveis com o seletor CSS passado como parâmetro. */

var elemento = document.querySelector("div.aprovado");
var array = document.querySelectorAll("div.aprovado");

/* Podemos acessar os atributos de um elemento HTML através do método getAttribute. Essemétodo recebe como parâmetro o nome do atributo desejado e devolve null ou ""
(string vazia) se o atributo não existir */

var valor = elemento.getAttribute("type");

//Também podemos acessar os atributos de um elemento HTML através da propriedade attributes.

for (var i = 0; i < elemento.attributes.length - 1; i++){
    console.log(elemento.attributes[i].name + " = " + elemento.attributes[i].value);
}

//Podemos acessar o conteúdo de um elemento HTML através da propriedade innerHTML. Essa propriedade armazena o conteúdo dos elementos HTML em forma de string.

var conteudo = elemento.innerHTML;