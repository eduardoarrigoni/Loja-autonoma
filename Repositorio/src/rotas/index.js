import express from "express";
import clientes from "./clientesRotas.js";
import produtos from "./produtosRotas.js";
import vendas from "./vendasRotas.js";

const rotas = (app) => {

    app.route("/").get((req, res) => res.status(200).send("Loja virtual"));
    app.use(express.json(), clientes, produtos, vendas);
};

export default rotas;