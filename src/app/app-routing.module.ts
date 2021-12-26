import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './Components/Signup/certificates/certificates.component';
import { CongratulationsComponent } from './Components/Signup/congratulations/congratulations.component';
import { DoctorInfoComponent } from './Components/Signup/doctor-info/doctor-info.component';
import { DocumentsComponent } from './Components/Signup/documents/documents.component';
import { OtpComponent } from './Components/Signup/otp/otp.component';
import { SignupComponent } from './Components/Signup/signup/signup.component';

const routes: Routes = [
  {path:'',component:SignupComponent , pathMatch: 'full' },
  {path:'OTP',component:OtpComponent },
  {path:'DoctorInfo',component:DoctorInfoComponent },
  {path:'Certificates',component:CertificatesComponent },
  {path:'Documents',component:DocumentsComponent },
  {path:'Congratulations',component:CongratulationsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
