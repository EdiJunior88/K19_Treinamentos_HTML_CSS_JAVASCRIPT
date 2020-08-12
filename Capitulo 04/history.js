//History

/* Podemos avançar ou retroceder no histórico dos navegadores através do objeto history. Esse
objeto pode ser acessado através do objeto window. */

//Avançando ou Retrocedendo

//Podemos avançar ou retroceder uma página no histórico através dos métodos forward e back respectivamente.
window.history.forward();
window.history.back();

//Também podemos utilizar o método go. Esse método recebe um número inteiro como parâmetro.
//avança uma página
window.history.go(1);
//retrocede uma página
window.history.go(-1);
//avança três páginas
window.history.go(3);
//retrocede três páginas
window.history.go(-3);

//A quantidade de páginas no histórico pode ser obtida através da propriedade length.
var numeroDePaginasDoHistorico = window.history.length;