const quantidade = document.getElementById('quantidade');
const listaProdutos = document.getElementById('lista-produtos');
const valorTotal = document.getElementById('valor-total');
const carrinhoDeProdutos = document.getElementById('carrinho__produtos__produto');
const valorTotalPagina = document.getElementById('valor-total');
const formulario = document.querySelector('.formulario');
let totalGeral = 0;


const produtos = [{
    "nome":"Fone de ouvido", "preco": 100},
    {"nome":"Celular", "preco": 1400},
    {"nome": "Oculus VR", "preco": 5000}
];

function adicionar(){
    //debugger;
    const produtoSelecionado = document.getElementById('produto').value;

    const nomeProduto = produtos[produtoSelecionado].nome;
    const qtd = quantidade.value;
    const preco = produtos[produtoSelecionado].preco;
    const totalProduto = qtd * preco;

    totalGeral += totalProduto;

    if(qtd <= 0){
        alert('Insira uma quantidade válida!');
        return;
    }
    
    let texto = `<span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R$${totalProduto}</span>`
    let section = document.createElement("section");
    section.innerHTML = texto;
    listaProdutos.appendChild(section);
    valorTotalPagina.textContent = `R$${totalGeral}`;

}

function limpar(){
    listaProdutos.textContent = '';
    valorTotalPagina.textContent = 'R$0,00';
    totalGeral = 0;
    formulario.reset();
}