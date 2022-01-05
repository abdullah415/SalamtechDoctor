import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralResponse } from 'src/Models/general-response';

@Injectable({
  providedIn: 'root'
})
export class ClinicInfoService {

  auth:string =localStorage.getItem('Authorization') as string;
  constructor(private http: HttpClient) { }


  //#region Options
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization':  `Bearer ${this.auth}`
      }

    )};
  //#endregion


  CreateClinic(lang:string,ClinicInfo:FormData){
    return this.http.post(`${environment.URL}${lang}/DoctorClinic/CreateDoctorClinic`,ClinicInfo,this.httpOptions);
  }
}
