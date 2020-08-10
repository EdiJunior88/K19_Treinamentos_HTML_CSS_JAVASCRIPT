var titulo = document.getElementById("titulo");

titulo.style.color = "red";

titulo.innerHTML = "K19 - JavaScript - DOM";

titulo.remove();

var body = document.querySelector("body");

var form = document.getElementById("formulario");

body.insertBefore(titulo, form);