import carrinho from './Carrinho.js';

class Cliente{
    
    constructor(nome, dtNascimento, email, cpf, celular, endereco, senha){
        //endereco = objeto de valores: rua, numero, complemento, estado
        this.nome = nome;
        this.dtNascimento = dtNascimento;
        this.email = email;
        this.cpf = cpf;
        this.celular = celular;
        this.endereco = endereco;
        this.senha = senha;
        this.idCarrinho = carrinho.idCarrinho;
    }
}