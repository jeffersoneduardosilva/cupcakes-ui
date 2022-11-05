export interface Product {
  id: number;
  descricao: string;
  preco: number;
  detalhes: string;
}

export const products: Product[] = [
  {
    id: 1,
    descricao: 'Phone XL',
    preco: 799,
    detalhes: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    descricao: 'Phone Mini',
    preco: 699,
    detalhes: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    descricao: 'Phone Standard',
    preco: 299,
    detalhes: ''
  }
];
