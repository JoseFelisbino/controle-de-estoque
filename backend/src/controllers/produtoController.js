import * as service from "../services/produtoService.js";

export async function criar(req, res) {
  try {
    const produto = await service.criarProduto(
      req.body,
      req.user.id
    );

    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function listar(req, res) {
  const produtos = await service.listarProdutos(req.user.id);
  res.json(produtos);
}

export async function buscar(req, res) {
  const produto = await service.buscarProduto(
    req.params.id,
    req.user.id
  );

  if (!produto) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }

  res.json(produto);
}

export async function atualizar(req, res) {
  try {
    const produto = await service.atualizarProduto(
      req.params.id,
      req.body,
      req.user.id
    );

    res.json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deletar(req, res) {
  const result = await service.deletarProduto(
    req.params.id,
    req.user.id
  );

  if (result.count === 0) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }

  res.json({ message: "Produto deletado" });
}