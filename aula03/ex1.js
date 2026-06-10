//Declare um objeto representando você mesmo com as propriedades: nome, idade, cidade e curso. Exiba cada propriedade com Template String e depois modifique a cidade e exiba novamente.

const input = require('readline-sync');

let perfilduda = {
    nome: "Eduarda",
    idade: 15,
    cidade: "Nova Aurora",
    curso: "Desenvolvimento de Sistemas",
}
console.log(`Olá! Meu nome é ${perfilduda.nome}, tenho ${perfilduda.idade} anos, sou de ${perfilduda.cidade} e curso ${perfilduda.curso}.`)

perfilduda.cidade = "Cascavel";
console.log(`Olá! Meu nome é ${perfilduda.nome}, tenho ${perfilduda.idade} anos, sou de ${perfilduda.cidade} e curso ${perfilduda.curso}.`)