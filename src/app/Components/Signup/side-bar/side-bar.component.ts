import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActiveComponentService } from '../active-component.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit  {

  constructor(private _ActiveComponentService:ActiveComponentService) {
    // this.DefaultStyle = this._ActiveComponentService.ActiveComponent ; 
    this._ActiveComponentService.ActiveComponent = "Signup";
   }
 

  //#region Decalre Variables
  DefaultStyle:string;
  //#endregion
  ngOnInit(): void {
    this.DefaultStyle = "Signup";
    console.log(this.DefaultStyle)
  }
  

}
