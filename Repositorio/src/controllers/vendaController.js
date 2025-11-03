import venda from "../models/Venda.js";
import { cliente } from "../models/Cliente.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";
class VendaController{

    static listarVendas = async (req, res, next) => {
        try{
            const listaVendas = await venda.find({});
            res.status(200).json(listaVendas);
        }catch(erro){
            next(erro);
        }
    };
    static listarVendasIdCliente = async (req, res, next) => {

        const clienteEncontrado = req.query.cliente;
        
        try{
            const listaVendasCliente = await venda.find({cliente: clienteEncontrado});
            if(listaVendasCliente !== null){
                res.status(200).json(listaVendasCliente);
            }else{
                next(new NaoEncontrado("Nenhuma venda localizada."));
            }
        }catch(erro){
            next(erro);
        }
    }
    static encontrarVendaId = async (req, res, next) => {
        try{
            const id = req.params.id;
            const vendaDesejada = await venda.findById(id);
            
            if(vendaDesejada !== null){
                res.status(200).json(vendaDesejada);
            }else{
                next(new NaoEncontrado("Venda não localizada."));
            }
        }catch(erro){
            next(erro);
        }
    }; 
    static cadastrarVenda = async (req, res, next) => {

        try{
            const vendaCriada = await venda.create(req.body);

            res.status(201).json({ message: "criado com sucesso", venda: vendaCriada });

        }catch(erro){
            next(erro);
        }
    };

    static deletarVendaId = async (req, res, next) => {
        try{
            const id = req.params.id;
            const vendaDesejada = await venda.findByIdAndDelete(id);
            if(vendaDesejada !== null){
                res.status(200).json({message: "Venda removida!"});
            }else{
                next(new NaoEncontrado("Venda não localizada."));
            }
        }catch(erro){
            next(erro);
            
        }
    };

};

export default VendaController;