//on

/*
Podemos definir o tratamento dos eventos com o método on. No exemplo abaixo, o primeiro
parâmetro é o nome do evento que será tratado e o segundo parâmetro a função que tratará o evento.
*/

$("body").on("click", function (){
    console.log("click");
});

/*
O tratamento de diversos eventos pode ser definido com uma única chamada do método on
*/

$("body").on("click mouseenter mouseleave", function (){
    console.log("click mouseenter mouseleave");
});
