import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

   //#region Declare Variables
   i:number=4;
   EnableResendLink:boolean;
   //#endregion

  //#region Constructor
  constructor() { }
  //#endregion

   //#region OnInit Method
   ngOnInit(): void {

    //#region Init Values
    this.EnableResendLink = true;
    //#endregion

    //#region Call Methods
    this.counter();
    //#endregion
   
  }
  //#endregion

   //#region counter interval
   counter(){ setInterval(() => { 
    if (this.i == 0) 
    {    
      this.EnableResendLink = false;
    return; 
  }this.i-- }, 1000); }
  //#endregion

   //#region  ResendCode
   ResendCode()
   {
     
   }
  //#endregion


}
