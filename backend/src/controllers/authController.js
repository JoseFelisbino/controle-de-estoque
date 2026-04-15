import * as authService from "../services/authService.js";

export async function register(req, res) {
  try {
    const { email, senha } = req.body;

    const user = await authService.register(email, senha);

    res.status(201).json({
        id: user.id,
        email: user.email
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const { email, senha } = req.body;

    const { accessToken, refreshToken } = await authService.login(email, senha);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict"
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict"
    });

    res.json({ message: "Login realizado com sucesso" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";

export async function refresh(req, res) {
  const token = req.cookies.refreshToken;

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

    const user = await prisma.usuario.findUnique({
      where: { id: decoded.id }
    });

    if (!user || user.refreshToken !== token) {
      return res.sendStatus(403);
    }

    const newAccessToken = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true
    });

    res.json({ message: "Token renovado" });

  } catch {
    res.sendStatus(403);
  }
}

export async function logout(req, res) {
  const token = req.cookies.refreshToken;

  if (token) {
    await prisma.usuario.updateMany({
      where: { refreshToken: token },
      data: { refreshToken: null }
    });
  }

  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  res.json({ message: "Logout realizado" });
}