import * as service from "../services/movimentacaoService.js";

export async function criar(req, res) {
  try {
    const movimentacao = await service.criarMovimentacao(
      req.body,
      req.user.id
    );

    res.status(201).json(movimentacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function listar(req, res) {
  const movimentacoes = await service.listarMovimentacoes(
    req.user.id
  );

  res.json(movimentacoes);
}