//14 – Reverter array. Escreva uma função reverter(array) que receba um array e retorne um novo array com os elementos na ordem inversa. Não use o método .reverse() pronto.

const input = require('readline-sync');

function reverter(array) {
    const arr = [];
    let index = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        arr[index] = array[i];
        index++;
    }
    return arr;
}   

const arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = input.question(`Digite o ${i + 1}º elemento do array: `);
}
console.log(`original: ${arr}`);
console.log(`invertido: ${reverter(arr)}`);