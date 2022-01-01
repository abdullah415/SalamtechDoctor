import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {


  constructor(private http:HttpClient) { }

   //#region Options
   httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxMDExMTExMTExIiwibmFtZWlkIjoiMTc0IiwianRpIjoiMTE5MzkxZDEtMDA3My00OTMzLWE4NGQtNTcxMGYxNDMzMGNlIiwiZXhwIjoxNjQxMjE5NTkyLCJpc3MiOiJTYWxhbVRlY2hAMjAyMSIsImF1ZCI6IlNhbGFtVGVjaEAyMDIxIn0.i7bjc5F7PLCIoa4zCkgSmgqA1fq5KrZHUa82SzH8DH4',
      }

    )};
  //#endregion

  CreateCertificate(lang:string , Certificate:FormData){
    return this.http.post(`${environment.URL}${lang}/Doctor/CreateDoctorCertificate`,Certificate,this.httpOptions);
  }

  //#region Get Specialist Id Name
  GetDoctorCertificate(lang:string){
    return this.http.get(`${environment.URL}${lang}/Doctor/GetDoctorCertificate`,this.httpOptions);
  }
  //#endregion
}
