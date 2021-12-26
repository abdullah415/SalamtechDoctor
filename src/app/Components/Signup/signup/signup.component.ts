import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from 'src/Models/signup';
import { SignupService } from 'src/Service/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //#region  Declare Variables
  signupform : FormGroup ;
  SignUp:Signup = new Signup();
  //#endregion

  //#region Constructor
  constructor(private fb:FormBuilder , private SignupService:SignupService) {}
  //#endregion
    
  //#region OnInit Section
  ngOnInit(): void 
  {

     //#region Sidebar Section
       document.getElementById('Doctorinfo')?.classList.remove('OnClick-Style');
       document.getElementById('Signup')?.classList.add('OnClick-Style');
       //#endregion
   
     //#region  Register Form Section
     this.signupform = this.fb.group(
       {
           FirstName:['',[Validators.required , Validators.minLength(2)]],
           MiddleName:['',[Validators.min(1) , Validators.required]],
           LastName:['',[Validators.min(1) , Validators.required]],
           Email:['',[Validators.email , Validators.required]],
           PhoneNumber:['',[Validators.required]],
           Password:['',[Validators.required , Validators.minLength(5)]],
           ConfirmPassword:['',[Validators.required , Validators.minLength(5)]],
         });
     //#endregion
  
   }
  //#endregion

  //#region Submit values
   Submit()
   {
        this.SignUp.Name = this.signupform.controls.FirstName.value  + " " +
                          this.signupform.controls.MiddleName.value + " " +
                          this.signupform.controls.LastName.value;

        this.SignUp.Password = this.signupform.controls.Password.value;
        this.SignUp.Phone = this.signupform.controls.PhoneNumber.value;
        this.SignUp.Email = this.signupform.controls.Email.value;
        this.SignUp.UserTypeId = 2;

          this.SignupService.SignUp(this.SignUp).subscribe((res)=>{
            console.log("success")
          },
          (err)=>{
            // this.errorMsg=err.error.Message
            console.log("err")
          })
      // document.getElementById('Doctorinfo')?.classList.add('OnClick-Style'); 
   }
   //#endregion

  //#region Toggle Password Method
    passwordIcon(id:string){
      const password = document.querySelector('#'+id);

      // toggle the type attribute
      const type = password?.getAttribute('type') === 'password' ? 'text' : 'password';
      password?.setAttribute('type', type);
      // toggle the eye slash icon
      password?.classList.toggle('fa-eye-slash');
    }
    //#endregion

}
