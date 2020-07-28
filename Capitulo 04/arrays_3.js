//Adicionando Elementos
//Para adicionar um elemento no final de um array, podemos utilizar a propriedade length

var cursos = ["K01", "K02"];

cursos[cursos.length] = "K03";
//["K01", "K02", "K03"]

for (var i = 0; i < cursos.length; i++){
    console.log(cursos[i]);
}

//Também podemos utilizar o método push().

var cursos = ["K01", "K02"];

cursos.push("K03");
//["K01", "K02", "K03"]

for (var i = 0; i < cursos.length; i++){
    console.log(cursos[i]);
}