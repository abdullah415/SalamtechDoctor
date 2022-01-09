import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClinicSchedule } from 'src/Models/clinic-schedule';
import { ClinicScheduleDay } from 'src/Models/clinic-schedule-day';
import { CreateClinicSchedule } from 'src/Models/create-clinic-schedule';
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
  PeriodForm : FormGroup ;
  HideBorder:boolean;
  GeneralResponse:GeneralResponse<IdNameList>=new GeneralResponse<IdNameList>();
  ClinicScheduleResponse:GeneralResponse<ClinicSchedule>=new GeneralResponse<ClinicSchedule>();
  DayList:IdNameList[];
  ClinicSchedule:ClinicSchedule[];
  DurationMedicalExamination:Duration[];
  DurationMedicalExaminationList:{[Id:number]:Duration}={};
  // Counter:number;
  ClinicScheduleDay:ClinicScheduleDay;
  PeriodsDay:ClinicScheduleDay[];
  // ClinicScheduleDay:GeneralResponse<ClinicScheduleDay>[];
  ClinicScheduleDayList:{[Id:number]:ClinicScheduleDay[]} = {}
  DayPeriodsList:{[ScheduleId:number]:ClinicScheduleDay} = {}
  ClinicScheduleDayListOriginal:{[Id:number]:ClinicScheduleDay[]} = {}
  CreateClinicSchedule:CreateClinicSchedule;
  //#endregion

  //#region constructor
  constructor( private ClinicScheduleService:ClinicScheduleService ,
               private LookupsService:LookupsService ,
               private fb:FormBuilder ) { }
  //#endregion

  //#region OnInit Method
  ngOnInit(): void {

    //#region Init Values
    this.DayList=[];
    this.DurationMedicalExamination=[];
    // this.ClinicScheduleDay = [];
    // this.Counter = 0;
    this.CreateClinicSchedule = {
      ClinicId                    :-1,
      DayId                       :-1,
      TimeFrom                    :"",
      TimeTo                      :"",
      Fees                        :-1,
      DurationMedicalExaminationId:-1,
      Inactive                    :false
    }
    //#endregion

    //#region call Methods
    this.GetDurationMedicalExamination('en');
    this.GetClinicSchedualByClinicId('en',41);

    for (let index = 1; index <= 7; index++) {
      this.GetClinicSchedualByClinicDayId('en',41,index);
    }

    //#endregion

    //#region  Register Form Section
          this.PeriodForm = this.fb.group(
            {
                DateFrom:['',[Validators.required]],
                DateTo:['',[Validators.required]],
                Fees:['',[Validators.required]],
                DurationExamination:['',[Validators.required]],
              });
      //#endregion

  }
  //#endregion

  //#region Consume API's

      //#region Get Days
      GetDays(lang:string)
      {
        this.LookupsService.GetDays(lang).subscribe(
          (response)=>{
            this.DayList =response.Data 
            // console.log( this.DayList);
          },
          (err)=>{
            console.log(err);
          }
        )
      }
      //#endregion

      //#region Get Duration Medical Examination
      GetDurationMedicalExamination(lang:string)
      {
          this.ClinicScheduleService.GetDurationMedicalExamination(lang).subscribe(
            (response)=>{
              this.DurationMedicalExamination = response.Data ;

              this.DurationMedicalExamination.forEach(element => {
                this.DurationMedicalExaminationList[element.Id] = element;
                  // console.log("dsdsd : ", this.DurationMedicalExaminationList[element.Id]);
              });
            },(err)=>{
              console.log(err);
            })

          
      }
      //#endregion

      //#region Get Clinic Schedual By Clinic Id
      GetClinicSchedualByClinicId(lang:string,ID:number)
      {
        this.ClinicScheduleService.GetClinicSchedualByClinicId(lang,ID).subscribe(
          (response)=>{
            this.ClinicSchedule = response.Data;
            // console.log("ClinicSchedule : ", this.ClinicSchedule)
          },
          (err)=>{

          }
        )
      }
      //#endregion

      //#region Get Clinic Schedual By Clinic Day Id
      GetClinicSchedualByClinicDayId(lang:string,ClinicId:number,DayId:number){
        this.ClinicScheduleService.GetClinicSchedualByClinicDayId(lang,ClinicId,DayId).subscribe(
          (response)=>{
            this.ClinicScheduleDayList[DayId] = response.Data;
            this.ClinicScheduleDayListOriginal[DayId] = response.Data;
            // console.log(this.ClinicScheduleDayList[DayId])
            // this.ClinicScheduleDayList[DayId].forEach(element => {
            //   console.log(element.SchedualId)
            // });
          },
          (err)=>{
            console.log(err)
          }
        )
      }
      //#endregion

      //#region Get Clinic Schedual By Clinic Day Id For One Day => To Reset
      GetClinicSchedualByClinicDayIdForOneDay(lang:string,ClinicId:number,DayId:number ,SchedualId:number ,Index:number){
        this.ClinicScheduleService.GetClinicSchedualByClinicDayId(lang,ClinicId,DayId).subscribe(
          (response)=>{
            this.PeriodsDay = response.Data;

            this.PeriodsDay.forEach(element => {

                if(element.SchedualId ==SchedualId )
                {
                  this.ClinicScheduleDayList[DayId][Index].TimeFrom = element.TimeFrom; 
                  this.ClinicScheduleDayList[DayId][Index].TimeTo = element.TimeTo; 
                  this.ClinicScheduleDayList[DayId][Index].Fees = element.Fees; 
                  this.ClinicScheduleDayList[DayId][Index].Inactive = element.Inactive; 
                  this.ClinicScheduleDayList[DayId][Index].DurationMedicalExaminationId = element.DurationMedicalExaminationId; 
                  // console.log( this.ClinicScheduleDayList[DayId][Index]);
                }
            });

          },
          (err)=>{
            console.log(err)
          }
        )
      }
      //#endregion

      //#region Create Clinic Schedule
      CreateDoctorClinicSchedual(NewPeriod:CreateClinicSchedule){
        this.ClinicScheduleService.CreateDoctorClinicSchedual(NewPeriod).subscribe(
          (respose)=>{
            // console.log(respose)
          },
          (err)=>{
            console.log(err)
          }
        )
      }
      //#endregion

  //#endregion

  hideborder()
  {

  }

  //#region Select Duration Method event change
  SelectDuration(event:any){
    // this.PeriodForm.controls.DurationExamination = event.target.value;
  }
  //#endregion

  //#region counter to Loop On Fixed Number Method
    counter(i: number) {
      return new Array(i);
  }
  //#endregion

  //#region Add Period
  AddPeriod(DayId:number)
  {
    // this.Counter+=1;
    // let object = this.ClinicScheduleDayList[DayId].find(x=>x.DayId == DayId);

    this.CreateClinicSchedule.DayId = DayId;
    this.CreateClinicSchedule.ClinicId=41;
    this.CreateClinicSchedule.DurationMedicalExaminationId=1;
    this.CreateClinicSchedule.Fees=0;
    this.CreateClinicSchedule.Inactive=false;
    this.CreateClinicSchedule.TimeFrom="";
    this.CreateClinicSchedule.TimeTo="";

    // this.ClinicScheduleDayList[DayId].push(this.CreateClinicSchedule)
    
  }
  //#endregion

  //#region nDelete Period
    DeletePeriod()
    {
      // if(this.Counter >0)
      // this.Counter-=1;
    }
  //#endregion

  //#region Create New Period =>  At First Time 
  SubmitPeriod(DayId:number,Active:boolean){

    this.CreateClinicSchedule.ClinicId                      = 41;
    this.CreateClinicSchedule.DayId                         = DayId;
    this.CreateClinicSchedule.TimeFrom                      = this.PeriodForm.controls.DateFrom.value ;
    this.CreateClinicSchedule.TimeTo                        = this.PeriodForm.controls.DateTo.value ;
    this.CreateClinicSchedule.Fees                          = this.PeriodForm.controls.Fees.value ;
    this.CreateClinicSchedule.DurationMedicalExaminationId  = +this.PeriodForm.controls.DurationExamination.value;
    this.CreateClinicSchedule.Inactive                      = Active;

     
    this.CreateDoctorClinicSchedual(this.CreateClinicSchedule)


    // console.log("ClinicId : ",this.CreateClinicSchedule.ClinicId)
    // console.log("DayID : ",DayId);
    // console.log("Active : ",Active);
    // console.log("DateFrom : ",this.PeriodForm.controls.DateFrom.value );
    // console.log("DateTo : ",this.PeriodForm.controls.DateTo.value );
    // console.log("Fees : ",this.PeriodForm.controls.Fees.value);
    // console.log("DurationExamination : ",this.PeriodForm.controls.DurationExamination.value);

  }
  //#endregion

  //#region Add Period On Schedule =>  Periods Exist 
  AddNewPeriod(DayId:number,ScheduleId:number ){

    // this.CreateClinicSchedule.ClinicId                      = 41;
    // this.CreateClinicSchedule.DayId                         = DayId;
    // this.CreateClinicSchedule.TimeFrom                      = this.PeriodForm.controls.DateFrom.value ;
    // this.CreateClinicSchedule.TimeTo                        = this.PeriodForm.controls.DateTo.value ;
    // this.CreateClinicSchedule.Fees                          = this.PeriodForm.controls.Fees.value ;
    // this.CreateClinicSchedule.DurationMedicalExaminationId  = +this.PeriodForm.controls.DurationExamination.value;
    // this.CreateClinicSchedule.Inactive                      = Active;

     
    // this.CreateDoctorClinicSchedual(this.CreateClinicSchedule)


    // console.log("ClinicId : ",this.CreateClinicSchedule.ClinicId)
    // console.log("DayID : ",DayId);
    // console.log("Active : ",Active);
    // console.log("DateFrom : ",this.PeriodForm.controls.DateFrom.value );
    // console.log("DateTo : ",this.PeriodForm.controls.DateTo.value );
    // console.log("Fees : ",this.PeriodForm.controls.Fees.value);
    // console.log("DurationExamination : ",this.PeriodForm.controls.DurationExamination.value);

    console.log("ScheduleId : ",this.ClinicScheduleDayList[DayId].find(x=>x.SchedualId == ScheduleId ))
  }
  //#endregion

  //#region Reset Period
  ResetPeriod(DayId:number,Index:number,SchedualId:number){
      this.GetClinicSchedualByClinicDayIdForOneDay('en',41,DayId ,SchedualId ,Index);     
  }
  //#endregion

}
