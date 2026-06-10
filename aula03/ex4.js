//Declare um array de pelo menos 5 alunos com id, nome e nota. Use .map() para gerar um novo array onde cada objeto tenha nome, nota e uma propriedade situacao com o valor "Aprovado" ou "Reprovado" conforme a nota seja maior ou igual a 7. Exiba o resultado.

const input = require('readline-sync');

let alunos = [
    {id: 1, nome: "Alice", nota: 8},
    {id: 2, nome: "Maria", nota: 6},
    {id: 3, nome: "Samuel", nota: 7},
    {id: 4, nome: "Alana", nota: 5},
    {id: 5, nome: "João", nota: 9}
];

let notas = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log("Situação dos alunos:");
notas.forEach(aluno => {
    console.log(`- ${aluno.nome}: Nota ${aluno.nota} - ${aluno.situacao}`);
});