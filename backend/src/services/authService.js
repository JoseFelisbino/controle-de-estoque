import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";

export async function register(email, senha) {
  const hash = await bcrypt.hash(senha, 10);

  return prisma.usuario.create({
    data: {
      email,
      senha_hash: hash
    }
  });
}

export async function login(email, senha) {
  const user = await prisma.usuario.findUnique({
    where: { email }
  });

  if (!user) throw new Error("Usuário não encontrado");

  const valid = await bcrypt.compare(senha, user.senha_hash);

  if (!valid) throw new Error("Senha inválida");

  const accessToken = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  await prisma.usuario.update({
    where: { id: user.id },
    data: { refreshToken }
  });

  return { accessToken, refreshToken };
}