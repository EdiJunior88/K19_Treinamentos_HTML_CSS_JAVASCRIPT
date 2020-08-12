//Removendo dados

/* O método removeItem dos objetos localStorage e sessionStorage é utilizado para remover dados
do Web Storage. Esse método recebe uma chave como parâmetro. */
localStorage.removeItem("usuario");
sessionStorage.removeItem("usuario");

//Para remover todas as entradas do localStorage ou do sessionStorage, podemos utilizar o método clear.
localStorage.clear();
sessionStorage.clear();