//6 – Contagem regressiva. Leia um número com readline-sync e faça uma contagem regressiva desse número até 1, exibindo cada valor. Ao final, exiba "Fim!".

const input = require('readline-sync');

let num = input.questionInt("digite um numero para iniciar a contagem regressiva: ");
for(let i = num; i >= 1; i--) {
    console.log(i);
}
console.log("Fim!");