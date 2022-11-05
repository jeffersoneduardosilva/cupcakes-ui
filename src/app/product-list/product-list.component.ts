import { Component, OnInit  } from '@angular/core';

import { Product } from '../products';
import { ProductListService } from './product-list.services';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  product = {} as Product;
  products: Product[] | undefined;

  constructor(private productListService: ProductListService,private cartService: CartService) {}

  ngOnInit() {
    this.getItens();
  }

  // Chama o serviço para obtém todos os itens / produtos
  getItens() {
   
    this.productListService.getItens().subscribe((products: Product[]) => {
    this.products = products;
      
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Produto adicionado no carrinho!');
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
