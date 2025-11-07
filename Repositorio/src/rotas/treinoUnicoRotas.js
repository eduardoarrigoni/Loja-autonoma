import express from "express";
import treinoUnicoController from "../controllers/treinoUnicoController.js";

const rotas = express.Router();

rotas.post("/novoTreino", treinoUnicoController.novoTreino);
rotas.put("/finalizarTreino", treinoUnicoController.finalizarTreino);
export default rotas;