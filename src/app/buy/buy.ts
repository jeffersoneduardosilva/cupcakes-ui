export interface Compra {
    id : number,
    uuid : string;
    precoTotal: number;
    status: string;
    dataCompra: string;

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