//Apply

/* Uma função pode ser associada momentaneamente a um objeto e executada através do método
apply. */

var deposita = function (valor) {
    this.saldo += valor;
}

var conta = {
    saldo: 0
}

deposita.apply(conta, [200]);
console.log(conta.saldo);