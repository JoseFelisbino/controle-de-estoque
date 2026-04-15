import { prisma } from "../config/prisma.js";

export async function criarCategoria(data, userId) {
  return prisma.categoria.create({
    data: {
      ...data,
      usuarioId: userId
    }
  });
}

export async function listarCategorias(userId) {
  return prisma.categoria.findMany({
    where: {
      usuarioId: userId
    }
  });
}

export async function buscarPorId(id, userId) {
  return prisma.categoria.findFirst({
    where: {
      id: Number(id),
      usuarioId: userId
    }
  });
}

export async function atualizar(id, data, userId) {
  return prisma.categoria.updateMany({
    where: {
      id: Number(id),
      usuarioId: userId
    },
    data
  });
}

export async function deletar(id, userId) {
  return prisma.categoria.deleteMany({
    where: {
      id: Number(id),
      usuarioId: userId
    }
  });
}