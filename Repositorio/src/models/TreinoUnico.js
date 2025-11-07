import mongoose, { mongo } from "mongoose";

const treinoUnicoSchema = new mongoose.Schema({
    
    id: { type: mongoose.Schema.Types.ObjectId },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'cliente', require: true},
    inicio: { type: Date, default: Date.now},
    fim: { type: Date, default: 0},
    tipoTreino: {
        type: String,
        enum: ['corrida', 'musculacao', 'bicicleta'],
        required: true
    }
}, {versionKey: false});

const treinoUnico = mongoose.model("treinoUnico", treinoUnicoSchema);

export {treinoUnico, treinoUnicoSchema};
