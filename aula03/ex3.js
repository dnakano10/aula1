//Use o mesmo array de produtos do exercício anterior. Use .find() para buscar o produto com id === 3 e exiba seu nome. Use .filter() para listar apenas os produtos com preço acima de R$ 50,00 e exiba os resultados.

const input = require('readline-sync');

let produtos = [
    {id: 1, nome: "camiseta", preco: 50},
    {id: 2, nome: "calça", preco: 100},
    {id: 3, nome: "tênis", preco: 150},
    {id: 4, nome: "kit 3 meias", preco: 30},
    {id: 5, nome: "chapéu", preco: 25}
];

let pEncontrado = produtos.find(produto => produto.id === 3);
if(pEncontrado) {
    console.log(`Produto encontrado: ${pEncontrado.nome}`);
} else {
    console.log("Produto com id 3 não encontrado.");
}

let produtosCaros = produtos.filter(produto => produto.preco > 50);
console.log("Produtos com preço acima de R$ 50,00:");
produtosCaros.forEach(produto => {
    console.log(`- ${produto.nome} (R$${produto.preco})`);
}); 