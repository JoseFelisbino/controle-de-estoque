import { prisma } from "../config/prisma.js";

export async function criarProduto(data, userId) {
  const {
    nome,
    descricao,
    preco,
    quantidade_estoque,
    categoriaId
  } = data;

  if (!nome) throw new Error("Nome é obrigatório");
  if (preco <= 0) throw new Error("Preço inválido");
  if (quantidade_estoque < 0) throw new Error("Estoque inválido");

  const categoria = await prisma.categoria.findFirst({
    where: {
      id: Number(categoriaId),
      usuarioId: userId
    }
  });

  if (!categoria) {
    throw new Error("Categoria inválida");
  }

  return prisma.produto.create({
    data: {
      nome,
      descricao,
      preco,
      quantidade_estoque,
      categoriaId: Number(categoriaId),
      usuarioId: userId
    }
  });
}

export async function listarProdutos(userId) {
  return prisma.produto.findMany({
    where: {
      usuarioId: userId
    },
    include: {
      categoria: true
    }
  });
}

export async function buscarProduto(id, userId) {
  return prisma.produto.findFirst({
    where: {
      id: Number(id),
      usuarioId: userId
    },
    include: {
      categoria: true
    }
  });
}

export async function atualizarProduto(id, data, userId) {
  const produto = await prisma.produto.findFirst({
    where: {
      id: Number(id),
      usuarioId: userId
    }
  });

  if (!produto) throw new Error("Produto não encontrado");

  return prisma.produto.update({
    where: { id: Number(id) },
    data
  });
}

export async function deletarProduto(id, userId) {
  const result = await prisma.produto.deleteMany({
    where: {
      id: Number(id),
      usuarioId: userId
    }
  });

  return result;
}