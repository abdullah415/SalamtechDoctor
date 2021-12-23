import { Component, OnInit } from '@angular/core';
import { ActiveComponentService } from '../active-component.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _ActiveComponentService:ActiveComponentService) {
    this.DefaultStyle = "Signup"; 
    this._ActiveComponentService.ActiveComponent = "Signup";
   }

   //#region Decalre Variables
   DefaultStyle:string = "Signup";
   //#endregion
   ngOnInit(): void {
     this.DefaultStyle = "Signup";
   }

   changeStyle()
   {
    this._ActiveComponentService.ActiveComponent = "Doctorinfo";
    this.DefaultStyle = "Doctorinfo"; 
   }


}
