import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FormsModule } from '@angular/forms';
import { BuyComponent } from './buy/buy.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'buy/:id', component: BuyComponent },
      { path: 'product/add', component: ProductRegistrationComponent },
      { path: 'product/inventory', component: ProductInventoryComponent },
      { path: 'report', component: ReportComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    BuyComponent,
    ProductRegistrationComponent,
    ProductInventoryComponent,
    ReportComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
