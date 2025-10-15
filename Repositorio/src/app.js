import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import rotas from "./rotas/index.js";

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexao com banco bem sucedida");
})
const app = express();
rotas(app);


export default app;
