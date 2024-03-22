import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  name:string="";
  mail:string="";
  mNumber:any="";
  screen1:boolean=false;

  simpleSubmit(){
    this.screen1=true;
    
  }

}
