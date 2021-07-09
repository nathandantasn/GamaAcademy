/* Crie um algoritmo que receba três notas de um aluno, calcule sua média 
e mostre as seguintes mensagens de acordo com a situação:
- Se a media for igual ou maior que 7 - Aprovado
- Se a média foir maior ou igual a 5 e menor que 7 - Recuperação
- Se a média for menor que 5 - Reprovado
*/

function calculaMedia(nota1, nota2, nota3){
    let media = (nota1+nota2+nota3) /3;
    if (media >= 7){
        return `Aprovado \nMédia: ${media}`;
    } else if (media >= 5 && media < 7){
        return `Recuperação \nMédia: ${media}`;
    } else {
        return `Reprovado \nMédia: ${media}`;
    }
}

console.log(calculaMedia(8,5,8));

