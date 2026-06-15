//3 – Par ou ímpar com ternário. Declare um número. Usando o operador ternário (? :) e o resto (%), exiba a string "par" ou "impar".

const input = require('readline-sync');

let num = input.questionInt("Digite um numero inteiro: ");
let resultado = (num % 2 === 0) ? "par" : "impar";

console.log(`O número ${num} é ${resultado}.`);