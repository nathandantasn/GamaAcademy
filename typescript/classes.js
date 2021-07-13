"use strict";
var Data = /** @class */ (function () {
    /* dia: number;
    mes: number;
    ano: number; */
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        /* this.dia = dia;
        this.mes = mes;
        this.ano = ano; */
    }
    return Data;
}());
var data = new Data(1, 2, 2020);
console.log(data.dia);
var data2 = new Data(1, 1);
console.log(data.ano);

var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        if (delta < 0) {
            if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
                this.velocidadeAtual += delta;
                console.log("O carro est\u00E1 andando a " + this.velocidadeAtual + "km/h");
            }
        }
        else {
            if (this.velocidadeAtual - delta >= 0) {
                this.velocidadeAtual -= delta;
                console.log("O carro est\u00E1 andando a " + this.velocidadeAtual + "km/h");
                if (this.velocidadeAtual == 0) {
                    console.log('Carro está parado');
                }
            }
        }
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.frear();
carro.acelerar();
