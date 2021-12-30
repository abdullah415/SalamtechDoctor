import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/Service/signup/signup.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {


  //#region  Declare Variables
  DoctorInfoForm : FormGroup ;
  //#endregion

  //#region Constructor
  constructor(private fb:FormBuilder ,
    private SignupService:SignupService ,
    private router:Router) {  }
  //#endregion

  //#region On Init Method
ngOnInit(): void {

  //#region Init Values
  document.getElementById('Doctorinfo')?.classList.add('OnClick-Style');
  document.getElementById('Signup')?.classList.add('OnClick-Style');
  //#endregion

   //#region  Register Form Section
   this.DoctorInfoForm = this.fb.group(
    {
        FirstName:['',[Validators.required , Validators.minLength(3)]],
        FirstNameAr:['',[Validators.required , Validators.minLength(3)]],
        MiddleName:['',[Validators.minLength(3) , Validators.required]],
        MiddleNameAr:['',[Validators.minLength(3) , Validators.required]],
        LastName:['',[Validators.minLength(3) , Validators.required]],
        LastNameAr:['',[Validators.minLength(3) , Validators.required]],
        Email:['',[Validators.email , Validators.required]],
        PhoneNumber:['',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
        Password:['',[Validators.required , Validators.minLength(6)]],
        ConfirmPassword:['',[Validators.required ]],
        Gender:['',[Validators.required ]],
        Nationality:['',[Validators.required ]],
        Country:['',[Validators.required ]],
        Speciality:['',[Validators.required]],
        SubSpeciality:['',[Validators.required]],
        Seniority:['',[Validators.required]]

      });
  //#endregion

}
//#endregion

  //#region changeStyle Method
changeStyle()
{
//  document.getElementById('Signup')?.classList.remove('OnClick-Style');
//  document.getElementById('Doctorinfo')?.classList.remove('OnClick-Style');
 document.getElementById('Certificates')?.classList.add('OnClick-Style');
}
//#endregion


}
