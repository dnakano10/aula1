//5 – FizzBuzz. Imprima os números de 1 a 100. Para múltiplos de 3, imprima "Fizz"; para múltiplos de 5, "Buzz"; para múltiplos de 3 e 5 ao mesmo tempo, "FizzBuzz".

const input = require('readline-sync');

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}