//9 – Mínimo. Escreva uma função min(a, b) que receba dois números e retorne o menor deles. Não use Math.min. Escreva a versão tradicional e depois reescreva como Arrow Function.

const input = require('readline-sync');

function min(a, b) {
    return (a < b) ? a : b;
}
const minArrow = (a, b) => (a < b) ? a : b;

let num1 = input.questionFloat("Digite o primeiro numero: ");
let num2 = input.questionFloat("Digite o segundo numero: ");

console.log(`O menor numero entre ${num1} e ${num2} é: ${min(num1, num2)}`);
console.log(`O menor numero entre ${num1} e ${num2} por AF é: ${minArrow(num1, num2)}`);

