import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorInfoModel } from 'src/Models/doctor-info-model';
import { DropDownModel } from 'src/Models/drop-down-model';
import { IdNameList } from 'src/Models/id-name-list';
import { DoctorService } from 'src/Service/Doctor/doctor.service';
import { SignupService } from 'src/Service/signup/signup.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {


  //#region  Declare Variables
  DoctorInfoForm : FormGroup ;
  DropDownModel:DropDownModel;
  DoctorInfoModel:DoctorInfoModel;
  DropDownList_Speciality:IdNameList[];
  DropDownList_SubSpeciality:IdNameList[];
  DropDownList_SeniorityLevel:IdNameList[];
  DropDownList_GetCountries:IdNameList[];
  //#endregion

  //#region Constructor
  constructor(private fb:FormBuilder ,
    private SignupService:SignupService ,
    private router:Router , 
    private DoctorService:DoctorService) {  }
  //#endregion

  //#region On Init Method
    ngOnInit(): void {

      //#region Init Values
      document.getElementById('Doctorinfo')?.classList.add('OnClick-Style');
      document.getElementById('Signup')?.classList.add('OnClick-Style');
      this.DropDownList_Speciality = [];
      // this.DoctorInfoForm.controls.ImageDoctor.value = "";
      // this.DropDownModel.Data = [];
      //#endregion

      //#region  Register Form Section
      this.DoctorInfoForm = this.fb.group(
        {
            FirstName:['',[Validators.required , Validators.minLength(3)]],
            FirstNameAr:['',[Validators.required , Validators.minLength(3)]],
            MiddleName:['',[Validators.minLength(3) , Validators.required]],
            MiddleNameAr:['',[Validators.minLength(3) , Validators.required]],
            LastName:['',[Validators.minLength(3) , Validators.required]],
            LastNameAr:['',[Validators.minLength(3) , Validators.required]],
            ImageDoctor:['',[ Validators.required]],
            Email:['',[Validators.email , Validators.required]],
            PhoneNumber:['',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
            Password:['',[Validators.required , Validators.minLength(6)]],
            ConfirmPassword:['',[Validators.required ]],
            Gender:['',[Validators.required ]],
            Nationality:['',[Validators.required ]],
            Country:['',[Validators.required ]],
            DateOfBirth:['',[Validators.required ]],
            Speciality:['',[Validators.required]],
            SubSpeciality:['',[Validators.required]],
            Seniority:['',[Validators.required]],
            BiographyAr:['',[Validators.required]],
            Biography:['',[Validators.required]]
          });
      //#endregion

      //#region call Methods 
      this.GetSpecialistIdName('en');
      this.SeniorityLevelIdName('en');
      this.GetCountries('en');
      //#endregion
    }

    //#endregion

//#region Definition API's

  //#region GetSubSpecialistIdName
  GetSubSpecialistIdName(lang:string , specialListId:number)
  {
    this.DoctorService.GetSubSpecialistIdName(lang ,specialListId ).subscribe(
      (response)=>{
        this.DropDownList_SubSpeciality = response.Data;
      },
      (err)=>{
        // console.log(err);
      }
    )
  }
  //#endregion

  //#region GetSubSpecialistIdName
  CreateProfile(lang:string , _DoctorInfoModel:DoctorInfoModel)
  {
    this.DoctorService.CreateProfile(lang ,_DoctorInfoModel ).subscribe(
      (response)=>{
       console.log(response);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  //#endregion

  //#region  GetSpecialistIdName
GetSpecialistIdName(lang:string)
{
  this.DoctorService.GetSpecialistIdName(lang).subscribe(
    (data)=>{
      this.DropDownModel = data;
      this.DropDownList_Speciality = this.DropDownModel.Data;
      // console.log(this.DropDownList);
    },
    (err)=>{}
  )
}
//#endregion

  //#region GetSubSpecialistIdName
  SeniorityLevelIdName(lang:string)
  {
    this.DoctorService.SeniorityLevelIdName(lang ).subscribe(
      (response)=>{
        this.DropDownList_SeniorityLevel = response.Data;
      },
      (err)=>{
        // console.log(err);
      }
    )
  }
  //#endregion

  //#region GetSubSpecialistIdName
  GetCountries(lang:string)
  {
    this.DoctorService.GetCountries(lang ).subscribe(
      (response)=>{
        this.DropDownList_GetCountries = response.Data;
      },
      (err)=>{
        // console.log(err);
      }
    )
  }
  //#endregion

//#endregion


  //#region Doctor Info Submit Method
    DoctorInfoSubmit()
  {

    this.DoctorInfoModel.FirstName = this.DoctorInfoForm.controls.FirstName.value;
    this.DoctorInfoModel.FirstNameAr = this.DoctorInfoForm.controls.FirstNameAr.value;
    this.DoctorInfoModel.MiddelName = this.DoctorInfoForm.controls.MiddelName.value;
    this.DoctorInfoModel.MiddelNameAr = this.DoctorInfoForm.controls.MiddelNameAr.value;
    this.DoctorInfoModel.LastName = this.DoctorInfoForm.controls.LastName.value;
    this.DoctorInfoModel.LastNameAr = this.DoctorInfoForm.controls.LastNameAr.value;
    this.DoctorInfoModel.GenderId = this.DoctorInfoForm.controls.Gender.value;
    this.DoctorInfoModel.NationalityId = this.DoctorInfoForm.controls.Country.value;
    this.DoctorInfoModel.SeniorityLevelId = this.DoctorInfoForm.controls.Seniority.value;
    this.DoctorInfoModel.SpecialistId = this.DoctorInfoForm.controls.Speciality.value;
    this.DoctorInfoModel.Birthday = this.DoctorInfoForm.controls.DateOfBirth.value;
    this.DoctorInfoModel.DoctorSubSpecialist = this.DoctorInfoForm.controls.SubSpeciality.value;
    this.DoctorInfoModel.DoctorInfo = this.DoctorInfoForm.controls.Biography.value;
    this.DoctorInfoModel.DoctorInfoAr = this.DoctorInfoForm.controls.BiographyAr.value;

    document.getElementById('Certificates')?.classList.add('OnClick-Style');  
    this.CreateProfile('en',this.DoctorInfoModel);  

  }
  //#endregion

  //#region SelectSpeciality Method event change
  SelectSpeciality(event:any){
    this.DoctorInfoForm.controls.Speciality = event.target.value;
    this.GetSubSpecialistIdName('en', event.target.value);
  }
  //#endregion

  //#region SubSpeciality Method event change
  SelectSubSpeciality(event:any){
    this.DoctorInfoForm.controls.SubSpeciality = event.target.value;
  }
  //#endregion

  //#region SubSpeciality Method event change
  SelectSeniority(event:any){
    this.DoctorInfoForm.controls.Seniority = event.target.value;
  }
  //#endregion

  //#region Countries Method event change
  SelectCountries(event:any){
    this.DoctorInfoForm.controls.Country = event.target.value;
  }
  //#endregion

  //#region Gender Method event change
  SelectGender(event:any){
    if(event.target.value !="")
    {
      this.DoctorInfoForm.controls.Gender = event.target.value;
    }
   
  }
  //#endregion

    //#region review AND File FormData image from input file
    public imagePath: any;
    imgURL: any = "../../../../assets/img/DoctorImg/Rectangle 2.png";
    public message: string;
  
    preview(files:any) {
      if (files.length === 0)
        return;
  
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
  
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
      this.DoctorInfoModel.profileImage = files[0];
      // this.FormDataImage.append('EpisodeIamge', files[0]);
    }
    //#endregion

}
