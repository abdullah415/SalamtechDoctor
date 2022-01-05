import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './../Models/Login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralResponse } from 'src/Models/general-response';
import { LoginResponse } from 'src/Models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  login(user:Login):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.URL}en/User/Login`,user);
  }
}
