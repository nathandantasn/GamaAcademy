// Arrays, spreads & métodos
const alunasGama = ["Paula", "Maria", "Estela", "Clara"];
// Acessar informações num array
console.log(alunasGama[0]);


// Operador spread (...)
const alunasXp = [...alunasGama, "Simara"];
console.log(alunasXp);

// métodos de interação
//for(let i = 0; i < alunasXp.length; i++){
  //  console.log(alunasXp[i]);
//}

// Map
alunasXp.map(aluna => console.log(aluna))

// Filter
const numeros = [34, 45, 67, 90, 55, 76]
const numerosImpares = numeros.filter(numero => numero%2 != 0);
console.log(numerosImpares);

const numerosPares = numeros.filter(numero => numero%2 == 0);
console.log(numerosPares);

// sort

const numerosOrdenadosCrescente = numeros.sort();
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a);
console.log(numerosOrdenadosDecrescente)

// reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1,34,35]
const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual
}, 5)

console.log(soma) // 75

