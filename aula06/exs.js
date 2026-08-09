//1. Um array em memória com pelo menos 2 itens iniciais
const express = require("express")
const app = express()
app.use(express.json())

let produtos = [
    { id: 1, nome: "presilha", preco: 4.90 },
    { id: 2, nome: "bala de morango", preco: 3.50 },
]


//2. GET listando todos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});


//3. GET buscando um pelo id (com 404 se não existir)
app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(a => a.id === id);
    if(!produto) {
        return res.status(404).json({ erro: "produto não encontrado" });
    }
    res.json(produto);
});


//4. POST criando um novo (id automático, status 201)
app.post('/produtos/produtoNovo', (req, res) => {
    const maiorId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) : 0;
    const id = maiorId + 1;
    
    const produtoNovo = { 
        id: id, 
        nome: req.body.nome, 
        preco: req.body.preco 
    }
    produtos.push(produtoNovo);
    res.status(201).json(produtoNovo) 
})

//5. PUT atualizando um existente
app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(a => a.id === id);
    
    if(!produto) {
        return res.status(404).json({ erro: "produto não encontrado" });
    }
    
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    res.json(produto);
});

//6. DELETE removendo um
app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id)
    const produto = produtos.find(a => a.id === id)
    
    if(!produto) {
        return res.status(404).json({ erro: "produto não encontrado" });
    }
    
    produtos = produtos.filter(a => a.id !==id)
    res.json({ mensagem: "produto excluido com sucesso", produto: produto })
})

app.listen(3000, () => {
    console.log("servidor rodando em porta 3000")
});