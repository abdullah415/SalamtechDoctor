import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClinicSchedule } from 'src/Models/clinic-schedule';
import { ClinicScheduleDay } from 'src/Models/clinic-schedule-day';
import { DropDownModel } from 'src/Models/drop-down-model';
import { Duration } from 'src/Models/duration';
import { GeneralResponse } from 'src/Models/general-response';

@Injectable({
  providedIn: 'root'
})
export class ClinicScheduleService {

<<<<<<< HEAD


  culture:string = localStorage.getItem('lang') as string;
  auth:string =localStorage.getItem('Authorization') as string;
  constructor(private http: HttpClient) { }
=======
  constructor(private http:HttpClient) { }
>>>>>>> parent of dbe3a18 (access input denied in schedule)

    //#region Options
    httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjAxMDExMTExMTExIiwibmFtZWlkIjoiMTc0IiwianRpIjoiOWIxYjkwNzEtZWZkNy00MDQ3LWE1NzctMjg3OTdlMjY4NjRkIiwiZXhwIjoxNjQxNDYxMzU1LCJpc3MiOiJTYWxhbVRlY2hAMjAyMSIsImF1ZCI6IlNhbGFtVGVjaEAyMDIxIn0.ehFTuLy5VuB846Nnk0Q05HiSQ0r6UyF-5_Uasp6EtTM',
        })};
    //#endregion
    

    //#region GetDuration Medical Examination
    GetDurationMedicalExamination(lang:string):Observable<GeneralResponse<Duration>>{
      return this.http.get<GeneralResponse<Duration>>(`${environment.URL}${this.culture}/LookUp/GetDurationMedicalExamination`,this.httpOptions);
    }
    //#endregion

    //#region Get Clinic Schedual By ClinicId
    GetClinicSchedualByClinicId(lang:string , ID:number):Observable<GeneralResponse<ClinicSchedule>>{
      return this.http.get<GeneralResponse<ClinicSchedule>>(`${environment.URL}${this.culture}/DoctorClinic/GetClinicSchedualByClinicId?ClinicId=${ID}`,this.httpOptions);
    }
    //#endregion

    //#region Get Clinic Schedual By ClinicId
    GetClinicSchedualByClinicDayId(lang:string ,  ClinicId :number , DayId :number):Observable<GeneralResponse<ClinicScheduleDay>>{
      return this.http.get<GeneralResponse<ClinicScheduleDay>>(`${environment.URL}${this.culture}/DoctorClinic/GetClinicSchedualByClinicDayId?ClinicId=${ClinicId}&DayId=${DayId}`,this.httpOptions);
    }
    //#endregion
}
