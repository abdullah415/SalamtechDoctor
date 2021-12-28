import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/Service/signup/signup.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

   //#region Declare Variables
   i:number=4;
   EnableResendLink:boolean;
   NCODE1:any;
   NCODE2:any;
   NCODE3:any;
   NCODE4:any;
   //#endregion

  //#region Constructor
  constructor(private SignupService:SignupService ) { }
  //#endregion

   //#region OnInit Method
   ngOnInit(): void {

    //#region Init Values
    this.EnableResendLink = true;
    this.NCODE1 = "";
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

  //#region  Verify Code
  verify(){
    if(true){
      console.log(this.NCODE1);
      // this.SignupService.ResenderCodeObject
    }
  }
  //#endregion

}
