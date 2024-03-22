import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"payment",component:PaymentComponent},
  {path:"product",component:ProductPageComponent},
  {path:"",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
