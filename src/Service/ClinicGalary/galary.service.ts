import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DropDownModel } from 'src/Models/drop-down-model';
import { Galary } from 'src/Models/galary';
import { GeneralResponse } from 'src/Models/general-response';

@Injectable({
  providedIn: 'root'
})
export class GalaryService {

  constructor(private http: HttpClient) { }

      //#region Options
      httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxMDExMTExMTExIiwibmFtZWlkIjoiMTc0IiwianRpIjoiOWIxYjkwNzEtZWZkNy00MDQ3LWE1NzctMjg3OTdlMjY4NjRkIiwiZXhwIjoxNjQxNDYxMzU1LCJpc3MiOiJTYWxhbVRlY2hAMjAyMSIsImF1ZCI6IlNhbGFtVGVjaEAyMDIxIn0.ehFTuLy5VuB846Nnk0Q05HiSQ0r6UyF-5_Uasp6EtTM',
        })};
      //#endregion

      //#region CreateClinicGallery
        CreateClinicGallery(lang:string , formData:FormData){
          return this.http.post(`${environment.URL}${lang}/DoctorClinic/CreateClinicGallery`,formData,this.httpOptions);
        }
        //#endregion

      //#region Get Clinic Gallery By ClinicId
        GetClinicGalleryByClinicId(lang:string , ID:number):Observable<GeneralResponse<Galary>>{
          return this.http.get<GeneralResponse<Galary>>(`${environment.URL}${lang}/DoctorClinic/GetClinicGalleryByClinicId?ClinicId=${ID}`,this.httpOptions);
        }
        //#endregion

      //#region Delete Clinic Gallery
        DeleteClinicGallery(lang:string , ID:number):Observable<GeneralResponse<Galary>>{
          return this.http.delete<GeneralResponse<Galary>>(`${environment.URL}${lang}/DoctorClinic/DeleteClinicGallery?ClinicGalleryId=${ID}`,this.httpOptions);
        }
        //#endregion

}
