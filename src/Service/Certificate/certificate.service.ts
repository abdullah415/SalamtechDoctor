import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  auth:string =localStorage.getItem('Authorization') as string;
  constructor(private http: HttpClient) { }


  //#region Options
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization':  `Bearer ${this.auth}`
      }

    )};
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

  //#region Update Certificate Id
  UpdateCertificate(lang: string,Certificate: FormData) {
    return this.http.post(
      `${environment.URL}${lang}/Doctor/UpdateDoctorCertificate`,Certificate,
      this.httpOptions
    );
  }
  //#endregion
}
