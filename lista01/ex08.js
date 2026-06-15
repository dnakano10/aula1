//8 – Tabuleiro de xadrez (Desafio). Crie uma string que represente um tabuleiro 8x8, usando \n para separar as linhas e alternando espaço e # para formar o padrão de tabuleiro. Depois, faça funcionar para qualquer tamanho lido do usuário.

const input = require('readline-sync');

let tam = input.questionInt("digite o tamanho do tabuleiro: ");
let tabl = "";
for(let i = 0; i < tam; i++) {
    for(let j = 0; j < tam; j++) {
        tabl += ((i + j) % 2 === 0) ? " " : "#";
    }
    if(i < tam - 1) {
        tabl += "\n";
    }
}

console.log(tabl);
