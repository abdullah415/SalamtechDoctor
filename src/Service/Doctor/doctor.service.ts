import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DoctorInfoModel } from 'src/Models/doctor-info-model';
import { DropDownModel } from 'src/Models/drop-down-model';

@Injectable({
  providedIn: 'root' 
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  //#region Options
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxMDExMTExMTExIiwibmFtZWlkIjoiMTc0IiwianRpIjoiZmZkNmQ4MjItMmUyOS00ZGFhLTk5M2MtYzRmYmRkOTI1NWY4IiwiZXhwIjoxNjQxMDQxNDM5LCJpc3MiOiJTYWxhbVRlY2hAMjAyMSIsImF1ZCI6IlNhbGFtVGVjaEAyMDIxIn0.cd_fGmg73iV9o3d4r0Rke0mNSjXO8O7gg8wHF-SihDU'
      }
    )};
  //#endregion

    //#region Get Specialist Id Name
    CreateProfile(lang:string , DoctorInfoModel:DoctorInfoModel):Observable<DropDownModel>{
      return this.http.post<DropDownModel>(`${environment.URL}${lang}/Doctor/CreateProfile`,DoctorInfoModel,this.httpOptions);
    }
    //#endregion

    //#region Get Specialist Id Name
    GetSpecialistIdName(lang:string):Observable<DropDownModel>{
      return this.http.get<DropDownModel>(`${environment.URL}${lang}/Specialist/GetSpecialist`,this.httpOptions);
    }
    //#endregion

    //#region Get Specialist Id Name
    GetSubSpecialistIdName(lang:string , specialListId:number):Observable<DropDownModel>{
      return this.http.get<DropDownModel>(`${environment.URL}${lang}/Specialist/GetSubSpecialist?specialListId=${specialListId}`,this.httpOptions);
    }
    //#endregion

    //#region Get Specialist Id Name
    SeniorityLevelIdName(lang:string):Observable<DropDownModel>{
      return this.http.get<DropDownModel>(`${environment.URL}${lang}/SeniorityLevel/GetSeniorityLevel`,this.httpOptions);
    }
    //#endregion

    //#region Get Specialist Id Name
    GetCountries(lang:string):Observable<DropDownModel>{
      return this.http.get<DropDownModel>(`${environment.URL}${lang}/LookUp/GetCountries`,this.httpOptions);
    }
    //#endregion

}
