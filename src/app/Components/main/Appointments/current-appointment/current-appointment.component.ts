import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-current-appointment',
  templateUrl: './current-appointment.component.html',
  styleUrls: ['./current-appointment.component.css']
})
export class CurrentAppointmentComponent implements OnInit {

  //#region Decalre Variables
  IamgeURL:string;
  //#endregion

  //#region constructor
  constructor() { }
  //#endregion

  //#region On Init Method
  ngOnInit(): void {

    //#region  Init Values
    this.IamgeURL = environment.ImagesURL;
    document.getElementById('Current')?.classList.add('visited-appointemt-component');
    document.getElementById('History')?.classList.remove('visited-appointemt-component');
    document.getElementById('Upcoming')?.classList.remove('visited-appointemt-component');
    //#endregion
  }
  //#endregion

}
