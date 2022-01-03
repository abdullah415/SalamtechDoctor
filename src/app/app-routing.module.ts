import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalaryResolver } from 'src/Resolver/galary.resolver';
import { ClinicGalaryComponent } from './Components/clinic/clinic-galary/clinic-galary.component';
import { ClinicInfoMainComponent } from './Components/clinic/clinic-info-main.component';
import { ClinicInfoComponent } from './Components/clinic/clinic-info/clinic-info.component';
import { ClinicSchedualComponent } from './Components/clinic/clinic-schedual/clinic-schedual.component';
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
      {path:'doctorinfo',component:DoctorInfoComponent },
      {path:'certificates',component:CertificatesComponent },
      {path:'documents',component:DocumentsComponent },
      {path:'Congratulations',component:CongratulationsComponent },
  ] },
  {path:'clinic',component:ClinicInfoMainComponent ,children:[
      {path:'',component:ClinicInfoComponent },
      {path:'galay',component:ClinicGalaryComponent , resolve:{Galary:GalaryResolver}},
      {path:'Schedule',component:ClinicSchedualComponent },
  ] },
  {path:'',component:MainComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
