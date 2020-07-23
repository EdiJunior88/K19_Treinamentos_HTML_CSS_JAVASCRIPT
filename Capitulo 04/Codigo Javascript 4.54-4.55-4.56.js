//Funções

/* As funções em JavaScript são objetos. Você pode armazená-las em variáveis,
arrays e outros objetos. Elas podem ser passadas como argumento ou devolvidas
por outra função. Veja o exemplo abaixo. */

var multiplicacao = function (x, y) {
    return x * y;
}

//Outra forma de criar uma função

function multiplicacao(x, y) {
    return x * y;
}

//Utilizando uma função

//Para utilizar a função multiplicacao, podemos chamá-la da seguinte forma

var resultado = multiplicacao(3, 2);