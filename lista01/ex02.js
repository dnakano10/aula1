//2 – Área do retângulo. Declare base e altura. Calcule e exiba a área e o perímetro do retângulo, cada um em sua própria linha, usando Template Strings.

const input = require('readline-sync');

let base = input.questionFloat("digite a base do retangulo: ");
let h = input.questionFloat("digite a altura do retangulo: ");
let area = base * h;
let peri = 2 * (base + h);

console.log(`a área do retangulo é ${area}.`);
console.log(`o perímetro do retangulo é ${peri}.`);