//4 – Triângulo de #. Escreva um laço que faça sete chamadas ao console.log para exibir um triângulo alinhado à esquerda, assim:
//#
//##
//###
//####
//#####
//######
//#######

const input = require('readline-sync');

const lin = 7; 
for (let i = 1; i <= lin; i++) {
  console.log("#".repeat(i));
}

//tinha feito errado, só percebi qndo o Lucas falou XD