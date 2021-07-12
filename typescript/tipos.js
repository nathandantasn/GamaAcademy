"use strict";
// Declarando variáveis em typescript
// Boolean type
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'Nathan Dantas';
// Array
var idades = [23, 28, 45, 32, 46];
var idades2 = [45, 21, 12, 54, 67];
//Tuple
var jogadores;
jogadores = ['Nathan', 'Fulano', 'Ciclano'];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//Any
var retornoDaAPI = [123, 'Vitor', false];
var retornoDaAPI2 = {
//.....
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
;
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(Object) {
    // ....
}
criar({});
// Never
function loopingInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<string>; // || string[]
var funcionarios = [{ nome: 'Nathan', sobrenome: 'Dantas', dataNascimento: new Date() }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionado: ', funcionario.nome);
    }
}
// Valores nulos ou opcionais
var altura = 1.6;
altura = null;
var contatos = {
    nome: 'Nathan',
    telefone1: '1322131'
};
// Type Assertion
var minhaIdade = 23;
//(minhaIdade as number).toString();
minhaIdade.toString();
//const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
