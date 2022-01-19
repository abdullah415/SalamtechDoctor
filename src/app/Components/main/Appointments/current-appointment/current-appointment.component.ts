import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppointmentService } from 'src/Service/Appointment/appointment.service';

@Component({
  selector: 'app-current-appointment',
  templateUrl: './current-appointment.component.html',
  styleUrls: ['./current-appointment.component.css']
})
export class CurrentAppointmentComponent implements OnInit {

  //#region Decalre Variables
  IamgeURL:string;
  p:number = 1;
  //#endregion

  //#region constructor
  constructor(private AppointmentService:AppointmentService) { }
  //#endregion

  //#region On Init Method
  ngOnInit(): void {

    //#region  Init Values
    this.IamgeURL = environment.ImagesURL;
    document.getElementById('Current')?.classList.add('visited-appointemt-component');
    document.getElementById('History')?.classList.remove('visited-appointemt-component');
    document.getElementById('Upcoming')?.classList.remove('visited-appointemt-component');
    //#endregion
  
    //#region Invoke Methods
    this.GetCurrentDoctorAppointment(10,0);
    //#endregion
  }
  //#endregion

//#region Consume API's

  //#region Get Current Doctor Appointment
  GetCurrentDoctorAppointment(MaxResultCount:number,SkipCount:number){
    this.AppointmentService.GetCurrentDoctorAppointment(MaxResultCount,SkipCount).subscribe(
      (response)=>{
        console.log(response.Data);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  //#endregion

//#endregion

// ChangePage(event:any){
//   console.log(event);
//   this.p = event;
// }

}
