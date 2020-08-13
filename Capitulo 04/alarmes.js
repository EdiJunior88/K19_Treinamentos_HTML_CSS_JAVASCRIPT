//Alarmes (Conteúdo Extra)

/* Podemos agendar tarefas para serem executadas no futuro. Para isso, podemos utilizar os métodos setTimeout
e setInterval. A primeira permite definir uma função que deve ser executada apenas uma vez depois de um
determinado tempo. A segunda permite definir uma função que deve ser executada de forma periódica

No exemplo a seguir, definimos uma função que será executada uma vez depois de 1600 milisegundos.*/
window.setTimeout(function (){
    console.log("timeout");
}, 1600);

//Por outro lado, nesse outro exemplo, definimos uma função que será executada a cada 2500 milisegundos.
window.setInterval(function (){
    console.log("interval");
}, 2500);

/* Podemos cancelar os alarmes com os métodos clearTimeout e clearInterval. Esses métodos necessitam da
referencia da função associada ao alarme. */
function alarmeTimeout(){
    console.log("timeout");
}

window.setTimeout(alarmeTimeout, 1600);

window.clearTimeout(alarmeTimeout);

/* ------------------------------------------------ */

function alarmeInterval(){
    console.log("interval");
}
window.setInterval(alarmeInterval, 2500);

window.clearInterval(alarmeInterval);