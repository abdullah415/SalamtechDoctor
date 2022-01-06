import { Component, OnInit } from '@angular/core';
import { ClinicPeriod } from 'src/Models/clinic-period';
import { ClinicSchedule } from 'src/Models/clinic-schedule';
import { ClinicScheduleDay } from 'src/Models/clinic-schedule-day';
import { Duration } from 'src/Models/duration';
import { GeneralResponse } from 'src/Models/general-response';
import { IdNameList } from 'src/Models/id-name-list';
import { ClinicScheduleService } from 'src/Service/ClinicSchedule/clinic-schedule.service';
import { LookupsService } from 'src/Service/Lockups/lookups.service';

@Component({
  selector: 'app-clinic-schedual',
  templateUrl: './clinic-schedual.component.html',
  styleUrls: ['./clinic-schedual.component.css']
})
export class ClinicSchedualComponent implements OnInit {

  //#region Declare Variables
  HideBorder: boolean;
  GeneralResponse: GeneralResponse<IdNameList> = new GeneralResponse<IdNameList>();
  ClinicScheduleResponse: GeneralResponse<ClinicSchedule> = new GeneralResponse<ClinicSchedule>();
  DayList: IdNameList[];
  ClinicSchedule: ClinicSchedule[];
  DurationMedicalExamination: Duration[];
  Counter: number;
  ClinicScheduleDay: ClinicScheduleDay[];
  //#endregion

  //#region constructor
  constructor(private ClinicScheduleService: ClinicScheduleService, private LookupsService: LookupsService) { }
  //#endregion

  //#region OnInit Method
  ngOnInit(): void {

    //#region Init Values
    this.DayList = [];
    this.DurationMedicalExamination = [];
    this.ClinicScheduleDay = [];
    this.Counter = 0;
    //#endregion

    //#region call Methods
    this.GetDurationMedicalExamination('en');
    this.GetClinicSchedualByClinicId('en', 41);
    this.GetClinicSchedualByClinicDayId('en', 41, 1);
    //#endregion

  }
  //#endregion

  //#region Consume API's

  //#region Get Days
  GetDays(lang: string) {
    this.LookupsService.GetDays(lang).subscribe(
      (response) => {
        this.DayList = response.Data
        // console.log( this.DayList);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  //#endregion

  //#region Get Duration Medical Examination
  GetDurationMedicalExamination(lang: string) {
    this.ClinicScheduleService.GetDurationMedicalExamination(lang).subscribe(
      (response) => {
        this.DurationMedicalExamination = response.Data
        // console.log( this.DurationMedicalExamination);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  //#endregion

  //#region Get Clinic Schedual By ClinicId
  GetClinicSchedualByClinicId(lang: string, ID: number) {
    this.ClinicScheduleService.GetClinicSchedualByClinicId(lang, ID).subscribe(
      (response) => {
        this.ClinicSchedule = response.Data;
        // console.log("dsds", this.ClinicSchedule)
      },
      (err) => {

      }
    )
  }
  //#endregion

  //#region GetClinicSchedualByClinicDayId
  GetClinicSchedualByClinicDayId(lang: string, ClinicId: number, DayId: number) {
    this.ClinicScheduleService.GetClinicSchedualByClinicDayId(lang, ClinicId, DayId).subscribe(
      (response) => {
        this.ClinicScheduleDay = response.Data;
        // console.log(this.ClinicScheduleDay )
      },
      (err) => {

      }
    )
  }
  //#endregion

  //#region Create Doctor Clinic Schedual
  CreateDoctorClinicSchedual(lang: string, ClinicScheduleDay: ClinicPeriod) {
    this.ClinicScheduleService.CreateDoctorClinicSchedual(lang, ClinicScheduleDay).subscribe(
      (response) => {
        console.log(response.Message);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  //#endregion

  //#endregion

  hideborder() {

  }

  //#region Select Duration Method event change
  SelectDuration(event: any) {
    // this.DoctorInfoForm.controls.Speciality = event.target.value;
    // this.GetSubSpecialistIdName('en', event.target.value);
  }
  //#endregion

  //#region counter to Loop On Fixed Number Method
  counter(i: number) {
    return new Array(i);
  }
  //#endregion

  //#region Add Period
  AddPeriod() {
    this.ClinicScheduleDay.push({
      DayName: "",
      SchedualId: -1,
      DayId: -1,
      TimeFrom: "00:00",
      TimeTo: "00:00",
      Fees: 0,
      Inactive: false,
      DurationMedicalExaminationId: 0
    })
    this.Counter += 1;
  }
  //#endregion

  //#region nDelete Period
  DeletePeriod() {
    if (this.Counter > 0)
      this.Counter -= 1;
  }
  //#endregion

  //#region Insert Schedule
  SubmitSchedule(DayId: number, TimeFrom: string, TimeTo: string, DurationMedicalExaminationId: number, Fees: any) {

    //Create Object typed of ClinicPeriod 
    let NewPeriod = {
      DayId: DayId,
      TimeFrom: TimeFrom,
      TimeTo: TimeTo,
      Fees: Fees,
      DurationMedicalExaminationId: DurationMedicalExaminationId,
      Inactive: true,
      ClinicId: 41,
    } as ClinicPeriod;

    console.log(NewPeriod);

    //Invoke Create Doctor Clinic Schedual
    // this.CreateDoctorClinicSchedual('en',NewPeriod);
  }
  //#endregion

  //#region Check Day Exist Method
  CheckDayExist(DayID: number): boolean {

    if (this.ClinicSchedule.find(item => item.DayId == DayID) == undefined)
      return false; else return true;

  }
  //#endregion

  changeInput(event:any){
    console.log("event : ",event.target.value);
  }

}
