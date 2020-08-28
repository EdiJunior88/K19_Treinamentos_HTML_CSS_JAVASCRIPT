//Atalhos

/*
O tratamento de um evento pode ser definido através de métodos que funcionam como atalhos
para o método on. No exemplo abaixo, utilizamos o método click que é um atalho para on("click",
função).

Analogamente, para cada evento, há um método de atalho com o mesmo nome.
*/

$("body").click(function (){
    console.log("click");
});
