//Declare um array com 4 produtos, cada um com id, nome e preco. Percorra o array com for e exiba cada produto. Ao final, use .push() para adicionar um quinto produto e exiba o novo tamanho do array.

const input = require('readline-sync'); 

let produtos = [ 
    {id: 1, nome: "camiseta", preco: 50}, 
    {id: 2, nome: "calça", preco: 100}, 
    {id: 3, nome: "tênis", preco: 150}, 
    {id: 4, nome: "kit 3 meias", preco: 30}, 
];

for(let i = 0; i < produtos.length; i++) { 
    console.log(`Produto ${i + 1}: id: ${produtos[i].id}, nome: ${produtos[i].nome}, preço: R$${produtos[i].preco}`); 
}

produtos.push({id: 5, nome: "chapéu", preco: 25}); 
console.log(`Produto adicionado: id: ${produtos[4].id}, nome: ${produtos[4].nome}, preço: R$${produtos[4].preco}`);

console.log(`Novo tamanho do array: ${produtos.length}`);
