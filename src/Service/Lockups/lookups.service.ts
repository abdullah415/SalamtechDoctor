import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DropDownModel } from 'src/Models/drop-down-model';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor(private http:HttpClient) { }

  //#region Options
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxMDExMTExMTExIiwibmFtZWlkIjoiMTc0IiwianRpIjoiYjg5YjNkOWItZmEwNy00YzMzLTg2ZjgtNTgzMTlhMTc1YzIxIiwiZXhwIjoxNjQxMjkyNzY3LCJpc3MiOiJTYWxhbVRlY2hAMjAyMSIsImF1ZCI6IlNhbGFtVGVjaEAyMDIxIn0.zopo2nE2NxBttbC-_DMXh0lQt5_S-ng9Ic-0F_ChpcM',
      })};
  //#endregion

    //#region Get Cities
    GetCities(lang:string):Observable<DropDownModel>{
      return this.http.get<DropDownModel>(`${environment.URL}${lang}/City/GetAllCities`,this.httpOptions);
    }
    //#endregion CreateDoctorDocuments

    //#region Get Areas
    GetAreas(lang:string):Observable<DropDownModel>{
      return this.http.get<DropDownModel>(`${environment.URL}${lang}/Area/GetAllAreas`,this.httpOptions);
    }
    //#endregion CreateDoctorDocuments
}
