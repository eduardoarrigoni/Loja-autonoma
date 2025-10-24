import venda from "../models/Venda.js";
import { cliente } from "../models/Cliente.js";

class VendaController{

    static async listarVendas (req, res){
        try{
            const listaVendas = await venda.find({});
            res.status(200).json(listaVendas);
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };
    static async listarVendasIdCliente(req, res){

        const clienteEncontrado = req.query.cliente;
        
        try{
            const listaVendasCliente = await venda.find({cliente: clienteEncontrado});

            res.status(200).json(listaVendasCliente);
        }catch(erro){
            //colocar mais erros aqui
            res.status(500).json({ message: `${erro.message} - cliente não encontrado`});
        }
    }
    static async encontrarVendaId (req, res){
        try{
            const id = req.params.id;
            const vendaDesejada = await venda.findById(id);
            res.status(200).json(vendaDesejada);
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha para encontrar o cliente`});
        }
    }; 
    static async cadastrarVenda(req, res){

        try{
            const vendaCriada = await venda.create(req.body);

            res.status(201).json({ message: "criado com sucesso", venda: vendaCriada });

        }catch(erro){
            res.status(500).json({ message:  `${erro.message} - falha no cadastro`});
        }
    };

    static async deletarVendaId (req, res){
        try{
            const id = req.params.id;
            await venda.findByIdAndDelete(id);

            res.status(200).json({message: "Venda removido!"});
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha na remoção do cliente`});
        }
    };

};

export default VendaController;