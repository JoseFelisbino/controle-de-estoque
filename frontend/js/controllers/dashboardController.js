import { getProdutos, getMovimentacoes } from "../services/api.js";
import {
  estoqueBaixo,
  produtosPorCategoria
} from "../adapters/dashboardAdapter.js";

import {
  renderEstoque,
  renderCategorias,
  renderMovimentacoes
} from "../views/dashboardView.js";

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