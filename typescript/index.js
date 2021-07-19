function somar(numero1, numero2) {
    return numero1 + numero2;
}
var meuNumero1 = 10;
var meuNumero2 = 5;
var resultado = somar(meuNumero1, meuNumero2);
console.log(resultado);
function print() {
    var Estado;
    (function (Estado) {
        Estado[Estado["SP"] = 0] = "SP";
        Estado[Estado["SC"] = 1] = "SC";
        Estado[Estado["SE"] = 2] = "SE";
    })(Estado || (Estado = {}));
    var uf = Estado[3];
    console.log(uf);
}
