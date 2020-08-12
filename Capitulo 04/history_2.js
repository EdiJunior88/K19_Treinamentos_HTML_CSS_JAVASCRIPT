//Adicionando ou Modificando Entradas do Histórico

/* Através do método pushState, podemos adicionar uma entrada na posição atual do histórico.
Com o método replaceState, podemos modificar a entrada atual do histórico. Esses dois métodos
recebem os mesmos parâmetros. */
pushState(stateObject, title, url);
replaceState(stateObject, title, url);

/* stateObject: Um objeto que pode ser utilizado para armazenar informações sobre a nova entrada.
   title: O título da nova entrada.
   url: A URL da nova entrada.

Como exemplo, considere que a página correspondente à URL www.k19.com.br esteja sendo exibida no navegador. */
var state = {
    info: "info"
};
window.history.pushState(state, "K19 - Cursos", "cursos");

/* O código acima adicionaria uma nova entrada com título “K19 - Cursos” e URL www.k19.com.br/
cursos. Já o código abaixo, substituiria a entrada atual do histórico por uma nova com título “K19 -
Apostilas” e URL www.k19.com.br/apostilas. */
var state = {
    info: "info"
};
window.history.replaceState(state, "K19 - Apostilas", "apostilas");