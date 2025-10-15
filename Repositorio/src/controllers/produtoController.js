import {produto} from "../models/Produto.js";

class ProdutoController{

    static async listarProdutos (req, res){
        try{
            const listaProdutos = await produto.find({});
            res.status(200).json(listaProdutos);
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };
    
    static async encontrarProdutoId (req, res){
        try{
            const id = req.params.id;
            const produtoDesejado = await produto.findById(id);
            res.status(200).json(produtoDesejado);
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha para encontrar o cliente`});
        }
    }; 
    static async cadastrarProduto(req, res){
        try{
            const novoProduto = await produto.create(req.body);
            res.status(201).json({ message: "criado com sucesso", cliente: novoProduto });

        }catch(erro){
            res.status(500).json({ message:  `${erro.message} - falha no cadastro`});
        }
    };

    static async atualizarProdutoId (req, res){
        try{
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body);

            res.status(200).json({message: "Dados atualizados"});
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha na atualização`});
        }
    }; 

    static async deletarProdutoId (req, res){
        try{
            const id = req.params.id;
            await produto.findByIdAndDelete(id);

            res.status(200).json({message: "Produto removido!"});
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha na exclusão`});
        }
    };

};

export default ProdutoController;