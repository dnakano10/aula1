//7 – Soma dos pares. Usando um laço for, some todos os números pares de 1 a 50 e exiba o total.

const input = require('readline-sync');

let soma = 0;
for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0) {
        soma += i;
    }
}
console.log(`A soma dos números pares de 1 a 50 é: ${soma}`);