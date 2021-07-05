// FizzBuzz
// Divisível por 3 => 'Fizz'
// Divisível por 5 => 'Buzz'
// Divisível por 3 e por 5 => 'FizzBuzz'
// Usuário não digitou um número => 'Não é um número'
// O número digitado não é divisível por 3 e nem por 5 => entrada

function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        return 'Não é um número';
    }
    else if ((entrada % 3 === 0) && (entrada % 5 === 0)){
        return 'FizzBuzz';
    }
    else if (entrada % 3 === 0){
        return 'Fizz';
    }
    else if (entrada % 5 === 0){
        return 'Buzz';
    }
    else {
        return entrada;
    }
}

let resultado = fizzBuzz(4);
console.log(resultado);