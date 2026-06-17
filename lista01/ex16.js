//16 – Boletim da turma (Desafio). Crie um array com pelo menos 5 alunos (com nome e nota). Use .map() para gerar um novo array onde cada aluno ganhe a propriedade situacao ("Aprovado" se nota ≥ 7, senão "Reprovado"). Depois, use .filter() para contar quantos foram aprovados e exiba a média geral da turma.
const input = require('readline-sync');

const al = [
    { nome: "aluno_1", nota: 8 },
    { nome: "aluno_2", nota: 6 },
    { nome: "aluno_3", nota: 7 },
    { nome: "aluno_4", nota: 5 },
    { nome: "aluno_5", nota: 9 }
]

const situa = al.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

const ap = situa.filter(aluno => aluno.situacao === "Aprovado");
const media = al.reduce((acc, aluno) => acc + aluno.nota, 0) / al.length;

console.log("Alunos com situação:", situa);
console.log("Número de alunos aprovados:", ap.length);
console.log("Média geral da turma:", media.toFixed(2));