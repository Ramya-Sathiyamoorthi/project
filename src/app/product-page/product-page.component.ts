import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  @Input() name:string="";
  @Input() mail:string="";
  @Input() mNumber:any="";

}
