//Web Storage

/* Podemos armazenar dados nos navegadores dos usuários através do Web Storage. Há duas formas de armazenamento.

- Local storage: Os dados são armazenados nos navegadores indefinidamente. Podemos recuperar
esses dados mesmo após o fechamento de uma aba ou da janela do navegador.

- Session storage: Os dados armazenados nos navegadores são descartados após o fechamento de
uma aba ou do navegador.

Os dados armazenados com a API do Web Storage são separados por domínio e não são compartilhados entre navegadores
diferentes. Os navegadores podem determinar a quantidade de espaço de armazenamento disponível. Por padrão, esse
espaço deve ser de pelo menos 5MB por domínio. */

//Armazenando Dados

/* O método setItem dos objetos localStorage e sessionStorage é utilizado para inserir dados no
Web Storage. Esse método recebe dois parâmetros, uma chave e o um valor. */
localStorage.setItem("usuario", "Rafael Cosentino");
sessionStorage.setItem("usuario", "Rafael Cosentino");

//No exemplo abaixo, mostramos outra forma de armazenar dados no Web Storage
localStorage.usuario = "Rafael Cosentino";
sessionStorage.usuario = "Rafael Cosentino";