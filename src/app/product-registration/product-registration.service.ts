
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Item } from './product-registration';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductRegistrationService {

  url = environment.API + '/item'; 

  // injetando o HttpClient
  constructor(private httpClient: HttpClient, private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

    // salva uma compra
  saveItem(item: Item) : Observable<Item>  {
      return this.http.post<Item>(this.url, (item), this.httpOptions)
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
