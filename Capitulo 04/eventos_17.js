//Métodos: addEventListener e removeEventListener

/* Podemos definir o tratamento dos eventos programaticamente através do método addEventListener. O primeiro parâmetro desse método é o nome do evento que desejamos tratar. O segundo
parâmetro é a função que tratará o evento.*/
function click(){
    console.log("click");
}

var elemento = document.getElementById("conteudo");
elemento.addEventListener("click", click);

/* Nessa abordagem, podemos associar diversas funções para tratar um determinado evento para
um determinado elemento HTML.
Também podemos utilizar funções anônimas como mostra o exemplo a seguir */
var elemento = document.getElementById("conteudo");
elemento.addEventListener(
    "click",
    function (){
        console.log("click")
    }
);

//Podemos remover um listener com o método removeEventListener
elemento.removeEventListener("click", click);

//O método removeEventListener não pode ser utilizado para funções anônimas.

//Propriedades dos objetos do DOM
/* Outra forma de definir programaticamente o tratamento dos eventos é utilizar as propriedades
de evento dos objetos que representam os elementos HTML. Veja o exemplo a seguir */
var elemento = document.getElementById("conteudo");
elemento.onclick = function (){
    console.log("click")
};

/* Nessa abordagem, apenas uma função pode ser associada a um determinado evento para um
determinado elemento HTML */