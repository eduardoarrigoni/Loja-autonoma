import {produto} from "../models/Produto.js";

class ProdutoController{

    static listarProdutos = async (req, res, next) => {
        try{
            const listaProdutos = await produto.find({});
            res.status(200).json(listaProdutos);
        }catch(erro){

            next(erro);
        }
    };
    
    static encontrarProdutoId = async(req, res, next) => {
        try{
            const id = req.params.id;
            const produtoDesejado = await produto.findById(id);
            res.status(200).json(produtoDesejado);
        }catch(erro){

            next(erro);
        }
    }; 
    static cadastrarProduto = async (req, res, next) => {
        try{
            const novoProduto = await produto.create(req.body);
            res.status(201).json({ message: "criado com sucesso", cliente: novoProduto });

        }catch(erro){
            next(erro);
        }
    };

    static atualizarProdutoId = async (req, res, next) => {
        try{
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body);

            res.status(200).json({message: "Dados atualizados"});
        }catch(erro){

            next(erro);
        }
    }; 

    static deletarProdutoId = async (req, res, next) => {
        try{
            const id = req.params.id;
            await produto.findByIdAndDelete(id);

            res.status(200).json({message: "Produto removido!"});
        }catch(erro){

            next(erro);
        }
    };

};

export default ProdutoController;