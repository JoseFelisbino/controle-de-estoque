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

const allowedOrigins = [
  "http://127.0.0.1:5500",
  "http://localhost:5500"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/produtos", produtoRoutes);
app.use("/movimentacoes", movimentacaoRoutes);



app.get("/", (req, res) => {
  res.send("API rodando!");
});

export default app;