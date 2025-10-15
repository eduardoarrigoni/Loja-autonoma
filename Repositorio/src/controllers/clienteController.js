import cliente from "../models/Cliente.js";

class ClienteController{

    static async listarClientes (req, res){
        try{
            const listaClientes = await cliente.find({});
            res.status(200).json(listaClientes);
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };
    
    static async encontrarClienteId (req, res){
        try{
            const id = req.params.id;
            const clienteDesejado = await cliente.findById(id);
            res.status(200).json(clienteDesejado);
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha para encontrar o cliente`});
        }
    }; 
    static async cadastrarCliente(req, res){
        try{
            const novoCliente = await cliente.create(req.body);
            res.status(201).json({ message: "criado com sucesso", cliente: novoCliente });

        }catch(erro){
            res.status(500).json({ message:  `${erro.message} - falha no cadastro`});
        }
    };

    static async atualizarClienteId (req, res){
        try{
            const id = req.params.id;
            await cliente.findByIdAndUpdate(id, req.body);

            res.status(200).json({message: "Dados atualizados"});
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha na atualização do cliente`});
        }
    }; 

    static async deletarClienteId (req, res){
        try{
            const id = req.params.id;
            await cliente.findByIdAndDelete(id);

            res.status(200).json({message: "Cliente removido!"});
        }catch(erro){

            res.status(500).json({message: `${erro.message} - falha na remoção do cliente`});
        }
    };

};

export default ClienteController;