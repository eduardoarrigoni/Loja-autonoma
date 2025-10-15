import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import cliente from "./models/Cliente.js";

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexao com banco bem sucedida");
})
const app = express();
app.use(express.json());


app.get("/", (req, res) => {

    res.status(200).send("Tudo Funcionando");
});
app.get("/clientes", async (req, res) => {

    const listaClientes = await cliente.find({});
    res.status(200).json(listaClientes);
});
app.get("/clientes/:id", (req, res) => {
    const index = buscaCompra(req.params.id);

    res.status(200).json(compras[index]);
})
app.post("/clientes", (req, res) => {
    compras.push(req.body);
    res.status(201).send("Armazenado no historico");
});

app.put("/clientes/:id", (req, res) => {
    const index = buscaCompra(req.params.id);
    compras[index].valor = req.body.valor;

    res.status(200).json(compras);
});
app.delete("/clientes/:id", (req, res) => {
    const index = buscaCompra(req.params.id);
    compras.splice(index, 1);

    res.status(200).json(compras);
})
export default app;
