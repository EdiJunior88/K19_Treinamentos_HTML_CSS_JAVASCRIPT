//Arguments

/* Os argumentos passados na chamada de uma função podem ser recuperados através do array
Arguments. Inclusive, esse array permite que os argumentos excedentes sejam acessados. */

var soma = function () {
    var soma = 0;

    for (var i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }

    return soma;
}

var resultado = soma(2,4,5,6,1);

console.log(resultado);
