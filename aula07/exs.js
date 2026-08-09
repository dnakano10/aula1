//Exercício 1 – Validar campos obrigatórios
//No POST da sua entidade, valide que todos os campos obrigatórios foram enviados. Se faltar algum, responda 400 com uma mensagem clara.

//Exercício 2 – Validar tipos e intervalos
//Escolha um campo numérico e valide: precisa ser número (isNaN) e estar num intervalo que faça sentido (ex: preço não pode ser negativo, idade não pode ser maior que 120).

//Exercício 3 – 404 em todas as rotas por id
//Garanta que GET/:id, PUT e DELETE respondem 404 quando o id não existe.

//Exercício 4 (Desafio) – Mensagens de erro detalhadas
//Em vez de parar no primeiro erro, colete todos os erros de validação num array e retorne todos de uma vez. Exemplo de resposta:
//{ " erros ":[" nome e obrigatorio ", " nota deve ser numero "]}
//Dica: crie const erros = [], dê push a cada problema encontrado, e no final, se erros.length > 0, responda 400 com o array.

const express = require("express");
const app = express();
app.use(express.json());

let produtos = [
    { id: 1, nome: "presilha", preco: 4.90 },
    { id: 2, nome: "bala de morango", preco: 3.50 }
];


app.get('/produtos', (req, res) => {
    res.json(produtos);
});


app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ erro: "produto não encontrado" });
    }

    res.json(produto);
});


app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    const erros = [];

    if (!nome || typeof nome !== "string") {
        erros.push("o campo 'nome' é obrigatório e deve ser um texto.");
    }

    if (preco === undefined || preco === null || isNaN(Number(preco))) {
        erros.push("o campo 'preco' deve ser um número válido.");
    } else if (Number(preco) < 0) {
        erros.push("o campo 'preco' não pode ser negativo.");
    }

    if (erros.length > 0) {
        return res.status(400).json({ erros });
    }

    const maiorId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) : 0;
    const novoId = maiorId + 1;

    const novoProduto = {
        id: novoId,
        nome,
        preco: Number(preco)
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});


app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ erro: "produto não encontrado" });
    }

    const { nome, preco } = req.body;

    // Atualiza apenas os campos enviados, caso contrário mantém os anteriores
    if (nome !== undefined) produto.nome = nome;
    if (preco !== undefined && !isNaN(Number(preco)) && Number(preco) >= 0) {
        produto.preco = Number(preco);
    }

    res.json(produto);
});


app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ erro: "produto não encontrado" });
    }

    produtos = produtos.filter(p => p.id !== id);

    res.json({
        mensagem: "produto excluído com sucesso",
        produtoRemovido: produto
    });
});

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});