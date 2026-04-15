import { prisma } from "../config/prisma.js";

export async function criarMovimentacao(data, userId) {
  const { produtoId, tipo, quantidade, observacao } = data;

  if (!["entrada", "saida"].includes(tipo)) {
    throw new Error("Tipo inválido");
  }

  if (quantidade <= 0) {
    throw new Error("Quantidade inválida");
  }

  const produto = await prisma.produto.findFirst({
    where: {
      id: Number(produtoId),
      usuarioId: userId
    }
  });

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  if (tipo === "saida" && produto.quantidade_estoque < quantidade) {
    throw new Error("Estoque insuficiente");
  }

  return prisma.$transaction(async (tx) => {

    let novoEstoque;

    if (tipo === "entrada") {
      novoEstoque = produto.quantidade_estoque + quantidade;
    } else {
      novoEstoque = produto.quantidade_estoque - quantidade;
    }

    await tx.produto.update({
      where: { id: produto.id },
      data: {
        quantidade_estoque: novoEstoque
      }
    });

    const movimentacao = await tx.movimentacao.create({
      data: {
        tipo,
        quantidade,
        observacao,
        produtoId: produto.id,
        usuarioId: userId
      }
    });

    return movimentacao;
  });
}

export async function listarMovimentacoes(userId) {
  return prisma.movimentacao.findMany({
    where: {
      usuarioId: userId
    },
    include: {
      produto: true
    },
    orderBy: {
      data: "desc"
    }
  });
}