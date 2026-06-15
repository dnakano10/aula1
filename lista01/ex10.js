//10 – Contador de letras. Escreva uma função contarLetra(texto, letra) que receba uma string e uma letra, e retorne quantas vezes aquela letra aparece no texto. Dica: percorra a string com for e compare texto[i] === letra.

const input = require('readline-sync');

const contarLetra = (texto, letra) => texto.toLowerCase().split(letra.toLowerCase()).length - 1;

let txt = input.question("digite o texto: ");
let letra = input.question("contar a letra: ");

let resultado = contarLetra(txt, letra);

console.log(`a letra "${letra}" aparece ${resultado} vezes`);