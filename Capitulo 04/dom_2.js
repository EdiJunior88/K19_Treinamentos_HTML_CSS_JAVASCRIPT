//Alterando elementos

//Podemos modificar os atributos de um elemento HTML através do método setAttribute.
elemento.setAttribute("type", "text");

//Podemos modificar o estilo de um elemento HTML através da propriedade style.
elemento.style.color = "red";

//As propriedades com nome composto devem seguir a convenção Camel Case.
elemento.style.borderColor = "red";

//Podemos modificar o conteúdo de um elemento HTML através da propriedade innerHTML.
elemento.innerHTML = "Acesse <a href = 'http://www.K19.com.br'>K19</a>";

//Removendo elementos

//Podemos remover um elemento HTML através do método remove
var elemento = document.getElementById("conteudo");
elemento.remove();

//Podemos remover um elemento HTML através do seu pai
var elemento = document.getElementById("conteudo");
elemento.parentNode.removeChild(elemento);

//Adicionando elementos

//Podemos criar um elemento HTML através do método createElement e adicioná-lo em um documento HTML através do método appendChild

var titulo = document.createElement("h1");
titulo.innerHTML = "K19 Treinamentos";
var elemento = document.getElementById("conteudo");
elemento.appendChild(titulo);

//Também podemos adicionar um elemento HTML em um documento HTML através do método insertBefore

var titulo = document.createElement("h1");
titulo.innerHTML = "Cursos K19";

var conteudo = document.getElementById("conteudo");
var tabela = conteudo.getElementsById("tabela-de-cursos");

conteudo.insertBefore(titulo, tabela);