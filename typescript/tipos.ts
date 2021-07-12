// Declarando variáveis em typescript
// Boolean type

const contaPaga: boolean = false;

// Number

const idade: number = 23;
const avaliacao: number = 4.5;

// String

const nome: string = 'Nathan Dantas';

// Array

const idades: number[] = [23, 28, 45, 32, 46];
const idades2: Array<number> = [45,21,12,54,67];

//Tuple
let jogadores: [string, string, string];
jogadores = ['Nathan', 'Fulano', 'Ciclano'];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[]= [123, 'Vitor', false];
const retornoDaAPI2: any = {
    //.....
};

// Void
function printarNaTela(msg: string): void{
    console.log(msg);
};

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(Object: object){
    // ....
}

criar({

});

// Never
function loopingInfinito(): never{
    while(true){}
}

function erro(mensagem: string): never{
    throw new Error(mensagem);
}

function falha() { // não precisa falar que é do tipo never, por que já usa o método
    return erro('Algo falhou');
}

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`)
}

exibirNota('10');
exibirNota(10);

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
//type Funcionarios = Array<string>; // || string[]
const funcionarios: Funcionario[] = [{nome: 'Nathan', sobrenome: 'Dantas', dataNascimento: new Date()}]

function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionado: ', funcionario.nome)
    }
}

// Valores nulos ou opcionais

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string | null; // nulo ou opcional
}

const contatos: Contato = {
    nome: 'Nathan',
    telefone1: '1322131'
}

// Type Assertion
const minhaIdade: any = 23;
//(minhaIdade as number).toString();
(<number>minhaIdade).toString();

//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);

