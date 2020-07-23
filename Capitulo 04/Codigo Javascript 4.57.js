//Método

/* Quando uma função faz parte de um objeto, ela é chamada de método. Para executar um método,
devemos utilizar a referência de um objeto e passar os parâmetros necessários. Observe o código
abaixo. */

var conta = {
    saldo: 0,
    deposita: function (valor) {
        this.saldo += valor;
    }
}

conta.deposita(100);
console.log(conta.saldo);