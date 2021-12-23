import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './../Models/Login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  login(user:Login){
    return this.http.post(`${environment.URL}en/User/Login`,user);
  }
}
