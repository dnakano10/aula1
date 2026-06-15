//12 – Calculadora com callback. Escreva uma função calcular(a, b, operacao) que receba dois números e uma função como terceiro argumento. Teste passando Arrow Functions diferentes para somar, subtrair e multiplicar.

const input = require('readline-sync');

function calcular(a, b, opr) {
    return opr(a, b);
}

const soma = (a, b) => a + b;
const subt = (a, b) => a - b;
const multi = (a, b) => a * b;

const num1 = parseFloat(input.question('digite o primeiro numero: '));
const num2 = parseFloat(input.question('digite o segundo numero: '));
console.log(`soma: ${calcular(num1, num2, soma)}`);
console.log(`subtracao: ${calcular(num1, num2, subt)}`);
console.log(`multiplicacao: ${calcular(num1, num2, multi)}`);