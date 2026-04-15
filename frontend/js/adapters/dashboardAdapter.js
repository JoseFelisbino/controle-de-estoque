export function estoqueBaixo(produtos) {
  return produtos.filter(p => p.quantidade_estoque <= 5);
}

export function produtosPorCategoria(produtos) {
  const mapa = {};

  produtos.forEach(p => {
    const nome = p.categoria.nome;
    mapa[nome] = (mapa[nome] || 0) + 1;
  });

  return mapa;
}