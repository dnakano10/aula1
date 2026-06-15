//1 – Conversor de temperatura. Declare uma temperatura em Celsius numa variável. Converta para Fahrenheit usando a fórmula F = C * 1.8 + 32 e exiba o resultado com Template String.

const input = require('readline-sync');

let cels = input.questionFloat("Digite a temperatura em Celsius: ");
let fahr = cels * 1.8 + 32;

console.log(`${cels}°C é igual a ${fahr}°F.`);