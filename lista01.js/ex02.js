//2 – Área do retângulo. Declare base e altura. Calcule e exiba a área e o perímetro do retângulo, cada um em sua própria linha, usando Template Strings.

const input = require('readline-sync');

let base = input.questionFloat("Digite a base do retangulo: ");
let h = input.questionFloat("Digite a altura do retangulo: ");
let area = base * h;
let peri = 2 * (base + h);

console.log(`A área do retangulo é ${area}.`);
console.log(`O perímetro do retangulo é ${peri}.`);