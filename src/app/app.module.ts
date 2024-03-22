import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './Activities/payment/payment.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivitiesComponent } from './Activities/activities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ActivitiesComponent,
    ProductPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
