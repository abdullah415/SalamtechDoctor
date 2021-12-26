import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

//#region  Declare Variables
signupform : FormGroup ;

// //#region Validation Object
//   validationObject = 
//   {
//     FirstName:
//       {
//         requierd:'FirstName requierd ' ,
//         minLength:'FirstName 2 character or more '
//       },
//       MiddleName:
//       {
//         requierd:'MiddleName requierd ' ,
//         minLength:'MiddleName 2 character or more '
//       },
//       LastName:
//       {
//         requierd:'LastName requierd ' ,
//         minLength:'LastName 2 character or more '
//       },
//       Email:
//       {
//         requierd:'Email requierd ' ,
//       },
//       PhoneNumber:
//       {
//         requierd:'PhoneNumber requierd ' ,
//       },
//       Password:
//       {
//         requierd:'Password requierd ' ,
//       },
//       ConfirmPassword:
//       {
//         requierd:'ConfirmPassword requierd ' ,
//       },

//   };
// //#endregion

//#endregion

  constructor(private fb:FormBuilder) {}
    

  
   ngOnInit(): void {
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

   changeStyle()
   {
    // document.getElementById('Signup')?.classList.remove('OnClick-Style');
    document.getElementById('Doctorinfo')?.classList.add('OnClick-Style');
    // document.getElementById('Certificates')?.classList.remove('OnClick-Style');
    // document.getElementById('LegalDocuments')?.classList.remove('OnClick-Style');
    // document.getElementById('Signup')?.classList.remove('OnClick-Style');
    // document.getElementById('Doctorinfo')?.classList.add('OnClick-Style');

    // this.DoctorinfoRef.nativeElement.style.color="#262D70";
    // this.DoctorinfoRef.nativeElement.style.borderLeftColor="#262D70";
    // this.DoctorinfoRef.nativeElement.style.color="red";
   }

   passwordIcon(id:string){
    const password = document.querySelector('#'+id);

    // toggle the type attribute
    const type = password?.getAttribute('type') === 'password' ? 'text' : 'password';
    password?.setAttribute('type', type);
    // toggle the eye slash icon
    password?.classList.toggle('fa-eye-slash');
  }

}
