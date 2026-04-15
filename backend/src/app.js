import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import produtoRoutes from "./routes/produtoRoutes.js";
import movimentacaoRoutes from "./routes/movimentacaoRoutes.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/produtos", produtoRoutes);
app.use("/movimentacoes", movimentacaoRoutes);

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("API rodando!");
});

export default app;