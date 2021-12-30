import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { CertificatesComponent } from './Components/Signup/certificates/certificates.component';
import { CongratulationsComponent } from './Components/Signup/congratulations/congratulations.component';
import { DoctorInfoComponent } from './Components/Signup/doctor-info/doctor-info.component';
import { DocumentsComponent } from './Components/Signup/documents/documents.component';
import { OtpComponent } from './Components/Signup/otp/otp.component';
import { SignUpMainComponent } from './Components/Signup/sign-up-main.component';
import { SignupComponent } from './Components/Signup/signup/signup.component';

const routes: Routes = [
  {path:'signup',component:SignUpMainComponent ,children:[
      {path:'',component:SignupComponent },
      {path:'OTP',component:OtpComponent },
      {path:'DoctorInfo',component:DoctorInfoComponent },
      {path:'Certificates',component:CertificatesComponent },
      {path:'Documents',component:DocumentsComponent },
      {path:'Congratulations',component:CongratulationsComponent },] 
  },
  {path:'',component:MainComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
