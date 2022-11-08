import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductRegistrationService } from './product-registration.service';
import { Item } from './product-registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent {

  form!: FormGroup;
  

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {

    this.form = this.formBuilder.group({
      descricao: ['', Validators.required],
      detalhes: ['', Validators.required],
      quantidadeEstoque: ['', Validators.required],
      preco: ['', Validators.required]
    });
    
  }

  cadastrarItem(){

    if (this.form.valid) {
      this.productRegistrationService.saveItem(this.form.value).subscribe((item: Item) => {});
    
      window.alert("Item cadastrado com sucesso!" )
      this.router.navigate(['/product/inventory']);
    }

  };

  constructor(
    private productRegistrationService: ProductRegistrationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

}
