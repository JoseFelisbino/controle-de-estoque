import * as service from "../services/categoriaService.js";

export async function criar(req, res) {
  try {
    const categoria = await service.criarCategoria(
      req.body,
      req.user.id
    );

    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function listar(req, res) {
  const categorias = await service.listarCategorias(req.user.id);
  res.json(categorias);
}

export async function buscar(req, res) {
  const categoria = await service.buscarPorId(
    req.params.id,
    req.user.id
  );

  if (!categoria) {
    return res.status(404).json({ error: "Categoria não encontrada" });
  }

  res.json(categoria);
}

export async function atualizar(req, res) {
  const result = await service.atualizar(
    req.params.id,
    req.body,
    req.user.id
  );

  if (result.count === 0) {
    return res.status(404).json({ error: "Categoria não encontrada" });
  }

  res.json({ message: "Atualizada com sucesso" });
}

export async function deletar(req, res) {
  const result = await service.deletar(
    req.params.id,
    req.user.id
  );

  if (result.count === 0) {
    return res.status(404).json({ error: "Categoria não encontrada" });
  }

  res.json({ message: "Deletada com sucesso" });
}