//Recuperando Dados

/* O método getItem dos objetos localStorage e sessionStorage é utilizado para recuperar dados
do Web Storage. Esse método recebe uma chave como parâmetro. */
usuario = localStorage.getItem("usuario");
usuario = sessionStorage.getItem("usuario");

//No exemplo abaixo, mostramos outra forma de recuperar dados do Web Storage.
usuario = localStorage.usuario;
usuario = sessionStorage.usuario;

//Podemos percorrer todas as entradas do localStorage ou do sessionStorage da seguinte forma:
for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
}

for (var i = 0; i < sessionStorage.length; i++){
    var key = sessionStorage.key(i);
    var value = sessionStorage.getItem(key);
}