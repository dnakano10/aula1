//4 – Triângulo de #. Escreva um laço que faça sete chamadas ao console.log para exibir um triângulo alinhado à esquerda, assim:
//#
//##
//###
//####
//#####
//######
//#######

const input = require('readline-sync');

let lin = input.questionInt("Digite o numero de linhas para o triangulo: ");
for(let i = 1; i <= lin; i++) {
    console.log("#".repeat(i));
}