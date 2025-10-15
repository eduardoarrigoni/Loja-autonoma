import mongoose, {mongo} from "mongoose";
import { clienteSchema } from "./Cliente.js";

const vendaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    clienteID: clienteSchema,
    valorTotal: {type: mongoose.Schema.Types.Double, require: true},
    itens: {type: Array, require: true}
    
}, {versionKey: false});

const venda = mongoose.model("venda", vendaSchema);

export default venda;