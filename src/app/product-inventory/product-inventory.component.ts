import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductInventoryService } from './product-inventory.service';
import { Item } from './product-inventory';



@Component({
  selector: 'app-product-inventory',
  templateUrl: './product-inventory.component.html',
  styleUrls: ['./product-inventory.component.css']
})

export class ProductInventoryComponent {

  item = {} as Item;
  itens: Item[] | undefined;
  

  ngOnInit(): void {
    this.getItens();
  }

   // Chama o serviço para obtém todos os itens / produtos
   getItens() {
   
    this.productInventoryService.getItens().subscribe((itens: Item[]) => {
    this.itens = itens;
      
    });
  }


  constructor(
    private productInventoryService: ProductInventoryService
  ) { }

}
