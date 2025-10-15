import express from "express";

const app = express();
app.use(express.json());

const compras = [
    {
        id: 1,
        valor: 200,
    },
    {
        id: 2,
        valor: 300,
    },
];

function buscaCompra(id){
    return compras.findIndex(compra => {
        return compra.id === Number(id);
    });
}
app.get("/", (req, res) => {

    res.status(200).send("Tudo Funcionando");
});
app.get("/historicocompras", (req, res) => {

    res.status(200).json(compras);
});
app.get("/historicocompras/:id", (req, res) => {
    const index = buscaCompra(req.params.id);

    res.status(200).json(compras[index]);
})
app.post("/historicocompras", (req, res) => {
    compras.push(req.body);
    res.status(201).send("Armazenado no historico");
});

app.put("/historicocompras/:id", (req, res) => {
    const index = buscaCompra(req.params.id);
    compras[index].valor = req.body.valor;

    res.status(200).json(compras);
});
app.delete("/historicocompras/:id", (req, res) => {
    const index = buscaCompra(req.params.id);
    compras.splice(index, 1);

    res.status(200).json(compras);
})
export default app;