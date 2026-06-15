//13 – Range e soma. Escreva uma função range(inicio, fim) que retorne um array com todos os números de inicio até fim (inclusive). Depois escreva soma(array) que some todos os números de um array. Teste: soma(range(1, 10)) deve dar 55.

const input = require('readline-sync');

function range(inicio, fim) {
  const arr = [];
  let index = 0;
  for (let i = inicio; i <= fim; i++) {
    arr[index] = i;
    index++;
  }
  return arr;
}

function soma(array) {
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total;
}

const inicio = input.questionInt("digite o inicio do range: ");
const fim = input.questionInt("digite o fim do range: ");

console.log(`soma dos números no range: ${soma(range(inicio, fim))}`);