import express from "express";
import ClienteController from "../controllers/clienteController.js";

const rotas = express.Router();

rotas.get("/clientes", ClienteController.listarClientes);
rotas.get("/clientes/:id", ClienteController.encontrarClienteId);
rotas.post("/clientes", ClienteController.cadastrarCliente);
rotas.put("/clientes/:id", ClienteController.atualizarClienteId);
rotas.delete("/clientes/:id", ClienteController.deletarClienteId);

export default rotas;