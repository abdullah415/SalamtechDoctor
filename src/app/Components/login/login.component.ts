import { Component, OnInit  } from '@angular/core';
import { LoginService } from './../../../Service/login.service';
import { Login } from './../../../Models/Login';
import { LoginResponse } from 'src/Models/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  buttonEnable:boolean
  loginDoctorForm:Login=new Login();
  errorMsg:string

  AuthenticatedUser:LoginResponse=new LoginResponse()

  constructor(private loginService:LoginService) {
    this.buttonEnable=true;
    // this.loginDoctorForm.Phone=0
    // this.loginDoctorForm.Password=""
    this.loginDoctorForm.UserTypeId=2
  }

  ngOnInit() {
  }

  checkForm(){
    let Phone= this.loginDoctorForm.Phone
    let Password=this.loginDoctorForm.Password

    if(Phone ?.length>0 && Password?.length>0){
      this.buttonEnable=false;
    }else{
      this.buttonEnable=true
    }
  }

  Login(){
    this.loginService.login(this.loginDoctorForm).subscribe((res)=>{
      // this.buttonEnable=true;
      this.AuthenticatedUser= res
      localStorage.setItem('Authorization',this.AuthenticatedUser.Data.Token)
    },
    (err)=>{
      console.log(err)
    })
  }

  passwordIcon(){
    const password = document.querySelector('#Password');

    // toggle the type attribute
    const type = password?.getAttribute('type') === 'password' ? 'text' : 'password';
    password?.setAttribute('type', type);
    // toggle the eye slash icon
    password?.classList.toggle('fa-eye-slash');
  }

}
