import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BuyService } from './buy.service';
import { Compra } from './buy';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  compra = {} as Compra;
  idTransacao = this._Activatedroute.snapshot.paramMap.get("id") != null ? this._Activatedroute.snapshot.paramMap.get("id") : "" ;

  ngOnInit(): void {
    this.getBuyWithId();
  }

  getBuyWithId() {
    
    this.buyService.getBuyByTransactionId(this.idTransacao!).subscribe((compra: Compra) => {
      this.compra = compra;
     });

  }

  constructor(
    private buyService: BuyService,
    private _Activatedroute:ActivatedRoute
  ) { }

}
