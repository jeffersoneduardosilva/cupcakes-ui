import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CartService } from '../cart.service';
import { Carrinho, CarrinhoRequest } from './cart';
import {v4 as uuidv4} from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  totalValue = this.cartService.totalValue;
  carrinho = {} as Carrinho;
  form!: FormGroup;
  idTransacao = '';
  botaoFinalizarHabilitado = this.cartService.getItems().length > 0;

  ngOnInit(): void {
    this.idTransacao = uuidv4();
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      idTransacao: this.idTransacao,
      itens: [this.items],
      precoTotal: [this.totalValue],
      status: [''],
 
      nome: [''],
      eMail: [''],
      cpf: [''],

      rua: [''],
      bairro: [''],
      cidade: [''],
      uf: [''],
      numero: [''],

      numeroCartao: [''],
      nomeCartao: [''],
      codigoSeguranca: [''],
      mesValidade: [''],
      anoValidade: ['']
    });
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  clear(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.totalValue = 0;
    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }

  finalizarCompra(): void {
     
    this.cartService.saveCarrinho(this.form.value).subscribe((carrinho: CarrinhoRequest) => {});
    this.clear();
    window.alert("Pedido criado com sucesso! Pedido numero: " + this.idTransacao)
    this.router.navigate(['/buy/' + this.idTransacao]);
  }

}
