import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorInfoComponent } from './Components/Signup/doctor-info/doctor-info.component';
import { SignupComponent } from './Components/Signup/signup/signup.component';

const routes: Routes = [
  {path:'',component:SignupComponent , pathMatch: 'full' },
  {path:'DoctorInfo',component:DoctorInfoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
