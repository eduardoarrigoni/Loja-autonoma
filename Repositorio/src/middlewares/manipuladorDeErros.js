import mongoose from "mongoose";

function manipuladorDeErros(erro, req, res, next){

    if(erro instanceof mongoose.Error.CastError){
        res.status(400).send({message: "Um ou mais dados estão incorretos."});
    }else if(erro instanceof mongoose.Error.ValidationError){
        res.status(400).send({message: "Erro de validação de dados"});
    }else{
        res.status(500).send({message: "Erro interno de servidor."});
    }
        

}
export default manipuladorDeErros;