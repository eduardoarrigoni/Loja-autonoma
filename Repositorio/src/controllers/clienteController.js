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
            res.status(200).json(clienteDesejado);
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
            await cliente.findByIdAndUpdate(id, req.body);

            res.status(200).json({message: "Dados atualizados"});
        }catch(erro){

            next(erro);
        }
    }; 

    static deletarClienteId = async (req, res, next) => {
        try{
            const id = req.params.id;
            await cliente.findByIdAndDelete(id);

            res.status(200).json({message: "Cliente removido!"});
        }catch(erro){

            next(erro);
        }
    };

};

export default ClienteController;