import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Signup } from 'src/Models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {}

  //#region Options
  httpOptions = { headers: new HttpHeaders(
    { 'Accept': ' */*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxMDExMTExMTExIiwibmFtZWlkIjoiMTc0IiwianRpIjoiZGQ3NWQyYTMtY2ZhMS00MjkzLTk1OTItOGEyOGFhY2NiNzZjIiwiZXhwIjoxNjQwNjkyNTA0LCJpc3MiOiJTYWxhbVRlY2hAMjAyMSIsImF1ZCI6IlNhbGFtVGVjaEAyMDIxIn0.Xxli9oxmtDWlgTpW9lgkQpz_WVkbA8LS2Avi73Cz6mI'
 }) };
  //#endregion

    SignUp(user:Signup):Observable<any>{
      return this.http.post<any>(`${environment.URL}en/User/Register`,user,this.httpOptions);
    }

}
