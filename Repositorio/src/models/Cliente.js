import mongoose, { mongo } from "mongoose";

const clienteSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    cpf: { type: String, required: true},
    dataCadastro: { type: mongoose.Schema.Types.Date, required: true},
    nome: { type: String, required: true }
}, { versionKey: false});

const cliente = mongoose.model("clientes", clienteSchema);

export {cliente, clienteSchema};