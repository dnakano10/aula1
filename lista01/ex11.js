//11 – Validador de idade. Escreva uma função podeVotar(idade) que retorne true se a idade for 16 ou mais, e false caso contrário. Leia uma idade e exiba a mensagem apropriada.

const input = require('readline-sync');

function podeVotar(id) {
    return id >= 16;
}

const id = input.questionInt("Digite a idade: ");

if (podeVotar(id)) {
    console.log("Você pode votar.");
} else {
    console.log("Você não pode votar.");
}
