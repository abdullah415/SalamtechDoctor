import { Component, OnInit } from '@angular/core';
import { Galary } from 'src/Models/galary';
import { GalaryService } from 'src/Service/ClinicGalary/galary.service';

@Component({
  selector: 'app-clinic-galary',
  templateUrl: './clinic-galary.component.html',
  styleUrls: ['./clinic-galary.component.css']
})
export class ClinicGalaryComponent implements OnInit {

  //#region Decalre Variables
    GalaryList:Galary[];
  //#endregion

  //#region Constructor
    constructor(private GalaryService:GalaryService) { }
  //#endregion

  //#region On Init Method
    ngOnInit(): void {

      //#region Init Values
      this.GalaryList=[];
      //#endregion

      //#region Call Methods
      this.GetClinicGalleryByClinicId('en',1);
      //#endregion

    }
  //#endregion

  //#region  Consume API's

      //#region Get Clinic Gallery By Clinic Id
        GetClinicGalleryByClinicId(lang:string,ID:number)
        {
          this.GalaryService.GetClinicGalleryByClinicId(lang,ID).subscribe(
            (response)=>{
              this.GalaryList = response.Data;
              console.log("GalaryList",this.GalaryList);
            },
            (err)=>{
              console.log(err);
            }
          )
        }
      //#endregion

      //#region CreateClinicGallery
          CreateClinicGallery(lang:string,formData:FormData){
            this.GalaryService.CreateClinicGallery(lang,formData).subscribe(
              (response)=>{
                console.log(response);
                this.GetClinicGalleryByClinicId('en',1);
              },
              (err)=>{
                console.log(err);
              }
            )
          }
      //#endregion

  //#endregion

  //#region  Upload Image
    public imagePath: any;
    imgFront: any = null  ;
    imgBack: any  = null;
    SyndicateFront:any=null;
    SyndicateBack:any=null;
    ImgCertificate:any=null;
    public message: string;

    preview(files:any, ID:number) {
      const formData = new FormData();
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
      reader.onload = (_event) =>
      {
          this.ImgCertificate = reader.result;
      }

      formData.append('ClinicId', ID as unknown as Blob);
      formData.append('clinicGallery',files[0] );
      console.log(formData)

      this.CreateClinicGallery('en',formData);
    }
  //#endregion

}
