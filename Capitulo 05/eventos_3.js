//off

/*
Podemos eliminar o tratamento de um evento com o método off. A seguir, mostramos algumas
formas de utilização desse método.
*/

/*
Removendo todos os tratamentos associados aos eventos dos parágrafos
*/
$("p").off();

/*
Removendo todos os tratamentos associados aos eventos de clique nos parágrafos
*/
$("p").off("click");

/*
Removendo um tratamentos específico associado ao evento de clique nos parágrafos
*/
$("p").off("click", tratamento);