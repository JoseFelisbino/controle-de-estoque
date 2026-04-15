import { getProdutos, getMovimentacoes, criarProduto, deletarProduto } from "../services/api.js";

import {estoqueBaixo,produtosPorCategoria } from "../adapters/dashboardAdapter.js";

import {
  renderEstoque,
  renderCategorias,
  renderProdutos,
  renderMovimentacoes
} from "../views/dashboardView.js";

import { showProdutoModal } from "../views/modalView.js";




async function init() {
  try {
    const produtos = await getProdutos();
    const movimentacoes = await getMovimentacoes();

    renderEstoque(estoqueBaixo(produtos));
    renderCategorias(produtosPorCategoria(produtos));
    renderMovimentacoes(movimentacoes);

  } catch (error) {
    console.error(error);
  }
}

init();


let produtos = [];

async function carregar() {
  produtos = await getProdutos();
  renderProdutos(produtos, handleDelete);
}

function handleDelete(id) {
  deletarProduto(id);
  produtos = produtos.filter(p => p.id !== id);
  renderProdutos(produtos, handleDelete);
}

document.getElementById("btnNovo").onclick = () => {
  showProdutoModal(async (data) => {
    const novo = await criarProduto(data);
    produtos.push(novo);
    renderProdutos(produtos, handleDelete);
  });
};

carregar();