import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralResponse } from 'src/Models/general-response';

@Injectable({
  providedIn: 'root'
})
export class ClinicInfoService {

  constructor(private http:HttpClient) { }

  //#region Options
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxMDExMTExMTExIiwibmFtZWlkIjoiMTc0IiwianRpIjoiOWIxYjkwNzEtZWZkNy00MDQ3LWE1NzctMjg3OTdlMjY4NjRkIiwiZXhwIjoxNjQxNDYxMzU1LCJpc3MiOiJTYWxhbVRlY2hAMjAyMSIsImF1ZCI6IlNhbGFtVGVjaEAyMDIxIn0.ehFTuLy5VuB846Nnk0Q05HiSQ0r6UyF-5_Uasp6EtTM',
      })};
  //#endregion


  CreateClinic(lang:string,ClinicInfo:FormData){
    return this.http.post(`${environment.URL}${lang}/DoctorClinic/CreateDoctorClinic`,ClinicInfo,this.httpOptions);
  }
}
