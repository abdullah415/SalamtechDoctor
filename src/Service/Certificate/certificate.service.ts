import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  constructor(private http: HttpClient) {}

  //#region Options
  httpOptions = {
    headers: new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxMDExMTExMTExIiwibmFtZWlkIjoiMTc0IiwianRpIjoiNTg3ODc0MDgtYzFiMS00NmQyLTg5NGUtNzI2ZGU3OTJmMmYwIiwiZXhwIjoxNjQxMzAwNDEyLCJpc3MiOiJTYWxhbVRlY2hAMjAyMSIsImF1ZCI6IlNhbGFtVGVjaEAyMDIxIn0.PjfCHlRd5Rb1v4vBgpwlDi3EEceCH8IYjeh7jT_b-u0',
    }),
  };
  //#endregion

  CreateCertificate(lang: string, Certificate: FormData) {
    return this.http.post(
      `${environment.URL}${lang}/Doctor/CreateDoctorCertificate`,
      Certificate,
      this.httpOptions
    );
  }

  //#region Get Certificate
  GetDoctorCertificate(lang: string) {
    return this.http.get(
      `${environment.URL}${lang}/Doctor/GetDoctorCertificate`,
      this.httpOptions
    );
  }
  //#endregion

  //#region Delete Certificate Id
  DeleteCertificate(lang: string,id:number) {
    return this.http.delete(
      `${environment.URL}${lang}/Doctor/DeleteDoctorCertificates?CertificateId=${id}`,
      this.httpOptions
    );
  }
  //#endregion
}
