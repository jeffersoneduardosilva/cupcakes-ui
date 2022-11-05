
import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Carrinho, CarrinhoRequest } from './cart/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  totalValue : number = 0;

  url = 'http://localhost:8080/controller/pedido'; 

  constructor(
    private http: HttpClient
  ) {}

  
  addToCart(product: Product) {
    this.items.push(product);
    this.totalValue = this.totalValue + product.preco;
 }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.totalValue = 0;
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todas as compras realizadas
  getCompras(): Observable<Carrinho[]> {
   return this.http.get<Carrinho[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // salva uma compra
  saveCarrinho(carrinho: CarrinhoRequest) : Observable<CarrinhoRequest>  {
    return this.http.post<CarrinhoRequest>(this.url, (carrinho), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}
