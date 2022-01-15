import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorHomeVisitScheduleResolver } from 'src/Resolver/doctor-home-visit-schedule.resolver';
import { DoctorVideoCallScheduleResolver } from 'src/Resolver/doctor-video-call-schedule.resolver';
import { GalaryResolver } from 'src/Resolver/galary.resolver';
import { ScheduleResolver } from 'src/Resolver/schedule.resolver';
import { ClinicGalaryComponent } from './Components/clinic/clinic-galary/clinic-galary.component';
import { ClinicInfoMainComponent } from './Components/clinic/clinic-info-main.component';
import { ClinicInfoComponent } from './Components/clinic/clinic-info/clinic-info.component';
import { ClinicManagerComponent } from './Components/clinic-manager/clinic-manager.component';
import { ClinicSchedualComponent } from './Components/clinic/clinic-schedual/clinic-schedual.component';
import { MainComponent } from './Components/main/main.component';
import { CallComponent } from './Components/Service/call/call.component';
import { ChatComponent } from './Components/Service/chat/chat.component';
import { HomeVisitComponent } from './Components/Service/home-visit/home-visit.component';
import { MainServiceComponent } from './Components/Service/main-service.component';
import { VideoCallComponent } from './Components/Service/video-call/video-call.component';
import { CertificatesComponent } from './Components/Signup/certificates/certificates.component';
import { CongratulationsComponent } from './Components/Signup/congratulations/congratulations.component';
import { DoctorInfoComponent } from './Components/Signup/doctor-info/doctor-info.component';
import { DocumentsComponent } from './Components/Signup/documents/documents.component';
import { OtpComponent } from './Components/Signup/otp/otp.component';
import { SignUpMainComponent } from './Components/Signup/sign-up-main.component';
import { SignupComponent } from './Components/Signup/signup/signup.component';
import { MainClinicComponent } from './Components/clinic-manager/main/main-clinic.component';

const routes: Routes = [
  
  {path:'',component:MainComponent },
  {path:'signup',component:SignUpMainComponent ,children:[
      {path:'',component:SignupComponent },
      {path:'OTP',component:OtpComponent },
      {path:'doctorinfo',component:DoctorInfoComponent },
      {path:'certificates',component:CertificatesComponent },
      {path:'documents',component:DocumentsComponent },
      {path:'Congratulations',component:CongratulationsComponent },
  ] },
  { path:'clinic',component:ClinicInfoMainComponent ,
    children:[
        {path:'',component:ClinicInfoComponent },
        {path:'gallary/:ClinicId',component:ClinicGalaryComponent , resolve:{Galary:GalaryResolver}},
        {path:'schedule/:ClinicId',component:ClinicSchedualComponent , resolve:{ClinicSchedule:ScheduleResolver}},
      ] 
  },
  { path:'main',component:MainComponent ,
    children:[
        {path:'service',component:MainServiceComponent,children:[
          {path:'',component:HomeVisitComponent , resolve:{DoctorHomeVisitSchedual:DoctorHomeVisitScheduleResolver}} ,
          {path:'homevisit',component:HomeVisitComponent , resolve:{DoctorHomeVisitSchedual:DoctorHomeVisitScheduleResolver}} ,
          {path:'videocall',component:VideoCallComponent , resolve:{DoctorVideoCallSchedual:DoctorVideoCallScheduleResolver}} ,
          {path:'call',component:CallComponent , resolve:{DoctorCallSchedual:DoctorVideoCallScheduleResolver}},
          {path:'chat',component:ChatComponent, resolve:{DoctorChatSchedual:DoctorVideoCallScheduleResolver} },
        ] },

        {path:'clinic',component:ClinicManagerComponent,children:[
          {path:'',component:MainClinicComponent} ,
          {path:'clinicinfo',component:ClinicInfoComponent },
        ] },
        
    ] 
  },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
