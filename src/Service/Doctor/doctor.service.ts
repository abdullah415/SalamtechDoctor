import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DoctorInfoModel } from 'src/Models/doctor-info-model';
import { DropDownModel } from 'src/Models/drop-down-model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  auth:string =localStorage.getItem('Authorization') as string;
  constructor(private http: HttpClient) { }


  //#region Options
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization':  `Bearer ${this.auth}`
      }

    )};
  //#endregion

    //#region Get Specialist Id Name
    CreateProfile(lang:string , DoctorInfoModel:FormData){
      return this.http.post(`${environment.URL}${lang}/Doctor/CreateProfile`,DoctorInfoModel,this.httpOptions);
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
