export default class Carrinho{

    constructor(cliente, ativo = true, valorTotal = 0){
        this.cliente = cliente;
        this.idCarrinho = gerarCodigo();
        this.produtos = {};
    }
    gerarCodigo(){
        //funcao para geracao de id
        return idCarrinho;
    }
    adicionarItem(produto){
        this.produtos[produto] += 1;
    }
    adicionarItem(produto, quantidade){
        this.produtos[produto] += quantidade;
    }
    encerrarCarrinho(){}
}