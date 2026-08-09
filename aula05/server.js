// 1 – Rota de apresentação. Crie uma rota GET em /sobre que retorne um JSON com seu nome, a disciplina e o ano.
const express = require('express');
const app = express();

app.get('/sobre', (req, res) => {
    const sobre = { 
        nome: "Eduarda A. N. Nakano", 
        disciplina: "Backend", 
        ano: 2026 
    };
    res.json(sobre);
});


// 2 – Recurso de produto. Crie uma rota GET em /produtos que retorne um array com pelo menos 4 produtos (id, nome, preco). Teste no navegador e no Postman.
const produtos = [
    { id: 1, nome: "feijao", preco: 4.90 },
    { id: 2, nome: "arroz", preco: 3.50 },
    { id: 3, nome: "laranja", preco: 5.90 },
    { id: 4, nome: "kitkat", preco: 8.90 },
    { id: 5, nome: "milho", preco: 5.00 }
];

app.get('/produtos', (req, res) => {
    res.json(produtos);
});


// 3 – Rota de status. Crie uma rota GET em /status que retorne online: true e uma mensagem, usando res.status(200).json(...).
app.get('/status', (req, res) => {
    res.status(200).json({ 
        online: true, 
        mensagem: "servidor online." 
    });
});


// 4 (Desafio) – Filtrando antes de responder. Crie a rota /produtos/caros que retorne apenas os produtos com preço acima de R$ 100, usando .filter() antes do res.json().
app.get('/produtos/caros', (req, res) => {
    const pdcaro = produtos.filter(produto => produto.preco > 100);
    res.json(pdcaro);
});



app.listen(3000, () => {
    console.log("ex1: http://localhost:3000/sobre");
    console.log("ex2: http://localhost:3000/produtos");
    console.log("ex3: http://localhost:3000/status");
    console.log("ex4: http://localhost:3000/produtos/caros");
});