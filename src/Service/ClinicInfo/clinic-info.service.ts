import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClinicId } from 'src/Models/clinic-id';
import { GeneralResponse } from 'src/Models/general-response';
import { GeneralResponseSingleObject } from 'src/Models/general-response-single-object';

@Injectable({
  providedIn: 'root'
})
export class ClinicInfoService {

  culture:string = localStorage.getItem('lang') as string;
  auth:string =localStorage.getItem('Authorization') as string;

  constructor(private http: HttpClient) { }


  //#region Options
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization':  `Bearer ${this.auth}`
      }

    )};
  //#endregion


  CreateClinic(lang:string,ClinicInfo:FormData):Observable<GeneralResponseSingleObject<ClinicId>>{
    return this.http.post<GeneralResponseSingleObject<ClinicId>>(`${environment.URL}${this.culture}/DoctorClinic/CreateDoctorClinic`,ClinicInfo,this.httpOptions);
  }
}
