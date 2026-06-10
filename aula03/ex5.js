//Declare um array vazio chamado produtos. Use readline-sync para ler nome e preço de 3 produtos, criando um objeto para cada um e adicionando ao array com .push(). Ao final, use .filter() para exibir apenas os produtos com preço acima de R$ 20,00.

const input = require('readline-sync');

let produtos = [];

for (let i = 0; i < 3; i++) {
    let nome = input.question('Digite o nome do produto: ');
    let preco = parseFloat(input.question('Digite o preço do produto: '));
    produtos.push({ nome, preco });
}

let produtosCaros = produtos.filter(produto => produto.preco > 20);
console.log('Produtos com preço acima de R$ 20,00:');
produtosCaros.forEach(produto => {
    console.log(`- ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});