export interface Carrinho {
    id : number,
    precoTotal: number;
    status: string;

    itens: [{
        id: number;
        descricao: string;
        preco: number;
        detalhes: string;
    }];

    cliente: {
        nome: string;
        eMail: string;
        cpf: string;
        endereco: {
            rua: string;
            bairro: string;
            cidade: string;
            uf: string;
            numero: string
        }
    };
    dadosPagamento: {
        tipo: string;
        cartao: {
            numero: number;
            nome: string;
            codigoSeguranca: number;
            mesValidade: number;
            anoValidade: number
        }
    }

}

export interface CarrinhoRequest{
    
    uuid : string;
    precoTotal: number;

    itens: [{
        id: number;
        descricao: string;
        preco: number;
        detalhes: string;
    }];

    nome: string;
    eMail: string;
    cpf: string;

    numeroCartao: number;
    nomeCartao: string;
    codigoSeguranca: number;
    mesValidade: number;
    anoValidade: number;

    rua: string;
    bairro: string;
    cidade: string;
    uf: string;
    numero: string

}