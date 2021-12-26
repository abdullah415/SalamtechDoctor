import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Signup } from 'src/Models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {}

  SignUp(user:Signup){
    return this.http.post(`${environment.URL}en/User/Login`,user);
  }

}
