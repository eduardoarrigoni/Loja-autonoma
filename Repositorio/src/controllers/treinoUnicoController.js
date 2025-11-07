import { treinoUnico } from "../models/TreinoUnico.js";

class treinoUnicoController{

    static novoTreino = async (req, res, next) => {

        try{

            const treinoIniciado = await treinoUnico.create(req.body);
            res.status(201).json({message: "Treino iniciado com sucesso", treinoIniciado});

        }catch(erro){
            next(erro);
        }

    }
    
    static finalizarTreino = async (req, res, next) => {

        try{
            
            const treinoPendente = await treinoUnico.findOne({fim: "1970-01-01T00:00:00.000Z"});
            const idTreino = treinoPendente._id;
            console.log(idTreino);     
            const treinoFinalizado = await treinoUnico.findByIdAndUpdate(idTreino, Date.now);
            console.log(treinoFinalizado);
            res.status(200).json({message: "treino finalizado", treinoFinalizado});

        }catch(erro){

            next(erro);
        }
    }



}
export default treinoUnicoController;