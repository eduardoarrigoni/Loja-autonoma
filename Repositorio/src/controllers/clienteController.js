import NaoEncontrado from "../erros/NaoEncontrado.js";
import {cliente} from "../models/Cliente.js";

class ClienteController{

    static listarClientes = async (req, res, next) => {
        try{
            const listaClientes = await cliente.find({});
            res.status(200).json(listaClientes);
        }catch(erro){

            next(erro);
        }
    };
    
    static encontrarClienteId = async (req, res, next) => {
        try{
            const id = req.params.id;
            const clienteDesejado = await cliente.findById(id);
            if(clienteDesejado !== null){
                res.status(200).json(clienteDesejado);
            }else{
                next(new NaoEncontrado("Cliente não localizado."));
            }
        }catch(erro){

           next(erro);
        }
    }; 
    static cadastrarCliente = async (req, res, next) => {
        try{
            const novoCliente = await cliente.create(req.body);
            res.status(201).json({ message: "criado com sucesso", cliente: novoCliente });

        }catch(erro){
            next(erro);
        }
    };

    static atualizarClienteId = async (req, res, next) => {
        try{
            const id = req.params.id;
            const clienteDesejado = await cliente.findByIdAndUpdate(id, req.body);
            if(clienteDesejado !== null){
                res.status(200).json({message: "Dados atualizados"});
            }else{
                next(new NaoEncontrado("Cliente não localizado."));
            }
        }catch(erro){

            next(erro);
        }
    }; 

    static deletarClienteId = async (req, res, next) => {
        try{
            const id = req.params.id;
            const clienteDesejado = await cliente.findByIdAndDelete(id);
            if(clienteDesejado !== null){
                res.status(200).json({message: "Cliente removido!"});
            }else{
                next(new NaoEncontrado("Cliente não localizado."));
            }
        }catch(erro){

            next(erro);
        }
    };

};

export default ClienteController;