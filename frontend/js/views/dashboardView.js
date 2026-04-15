function getClasse(qtd) {
  if (qtd <= 2) return "critico";
  if (qtd <= 5) return "baixo";
  return "normal";
}

export function renderEstoque(lista) {
  const div = document.getElementById("estoque");

  div.innerHTML = lista.map(p => `
    <div class="${getClasse(p.quantidade_estoque)}">
      ${p.nome} (${p.quantidade_estoque})
    </div>
  `).join("");
}

export function renderCategorias(mapa) {
  const div = document.getElementById("categorias");

  div.innerHTML = Object.entries(mapa)
    .map(([cat, total]) => `<div>${cat}: ${total}</div>`)
    .join("");
}

export function renderMovimentacoes(lista) {
  const div = document.getElementById("movimentacoes");

  div.innerHTML = lista.slice(0, 5)
    .map(m => `
      <div>
        ${m.tipo} - ${m.produto.nome} (${m.quantidade})
      </div>
    `)
    .join("");
}