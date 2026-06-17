//15 – Catálogo de produtos. Crie um array com 5 produtos (cada um com id, nome e preco). Em seguida:
const input = require('readline-sync');

const pd = [
  { id: 1, nome: "produto1", preco: 50 },
  { id: 2, nome: "produto2", preco: 150 },
  { id: 3, nome: "produto3", preco: 200 },
  { id: 4, nome: "produto4", preco: 80 },
  { id: 5, nome: "produto5", preco: 120 }
];


//a) Use .find() para buscar e exibir o produto de id 3.
const idDig = input.questionInt("Digite o ID do produto que deseja buscar: ");

const pdenc = pd.find(p => p.id === idDig);
if (pdenc) {
  console.log(`produto encontrado: ID: ${pdenc.id}, nome: ${pdenc.nome}, preco: R$ ${pdenc.preco.toFixed(2)}`);
} else {
  console.log(`produto com ID ${idDig} não encontrado.`);
}


//b) Use .filter() para listar os produtos com preço acima de 100.
const pdacima = pd.filter(p => p.preco > 100);
console.log("produtos com preco acima de 100:");
pdacima.forEach(p => {
    console.log(`- ${p.nome}: R$ ${p.preco.toFixed(2)}`);
});


//c) Use .map() para criar um array só com os nomes dos produtos.
const nomespd = pd.map(p => p.nome);
console.log("nome dos produtos:");
nomespd.forEach(nome => {
    console.log(`- ${nome}`);
});


//d) Use .forEach() para exibir cada produto formatado.
console.log("catálogo de produtos:");
pd.forEach(p => {
    console.log(`ID: ${p.id}, nome: ${p.nome}, preco: R$ ${p.preco.toFixed(2)}`);
});