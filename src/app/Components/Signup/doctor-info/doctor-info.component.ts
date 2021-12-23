import { Component, OnInit } from '@angular/core';
import { ActiveComponentService } from '../active-component.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  constructor(private _ActiveComponentService:ActiveComponentService) {     
        this.DefaultStyle = "Doctorinfo"; 
        this._ActiveComponentService.ActiveComponent = "Doctorinfo";
        console.log(this._ActiveComponentService.ActiveComponent)
    }

    //#region Decalre Variables
    DefaultStyle:string = "Doctorinfo";
    //#endregion
    ngOnInit(): void {
      this.DefaultStyle = "Doctorinfo";
    }
}
