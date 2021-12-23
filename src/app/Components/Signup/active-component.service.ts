import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveComponentService {

  constructor() { }
  //#region Decalre Variables
  ActiveComponent:string="Signup";
  //#endregion
}
