import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/Models/Login';
import { LoginResponse } from 'src/Models/LoginResponse';
import { LoginService } from 'src/Service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  //#region Declare Variables
  LoginForm:FormGroup;
  //#endregion

  //#region constructor
  constructor(private fb:FormBuilder,
              private toastr:ToastrService,
              private router:Router) {
  }
  //#endregion

  //#region On Init Method
  ngOnInit() {

     //#region  Register Form Section
     this.LoginForm = this.fb.group(
      {
          // PhoneNumber:['',[Validators.required]],
          // Password:['',[Validators.required , Validators.minLength(6)]]
        });
    //#endregion

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
