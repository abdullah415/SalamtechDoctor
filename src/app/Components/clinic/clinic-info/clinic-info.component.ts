import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsComponent } from 'src/app/Shared/google-maps/google-maps.component';
import { Coordinates } from 'src/Models/Coordinates';
import { ClinicInfoModel } from './../../../../Models/clinicInfoModel';

@Component({
  selector: 'app-clinic-info',
  templateUrl: './clinic-info.component.html',
  styleUrls: ['./clinic-info.component.css']
})
export class ClinicInfoComponent implements OnInit {

  coordinates: Coordinates;



  openGoogelMapsModal() {
    const modalRef = this.modalService.open(GoogleMapsComponent,
      {
        scrollable: true,
        // windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });
    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      this.coordinates = result;
    }, (reason) => {
    });
  }



  ClinicInfoForm:FormGroup
  ClinicInfoModel:ClinicInfoModel
  constructor(private fb:FormBuilder,private modalService: NgbModal ) {this.coordinates = {} as Coordinates; }

  ngOnInit(): void {
    this.ClinicInfoModel=new ClinicInfoModel()
    //#region  Register Form Section
    this.ClinicInfoForm = this.fb.group(
      {
        Name:['',[Validators.required , Validators.minLength(3)]],
        NameAr:['',[Validators.required , Validators.minLength(3)]],
        clinicLogo:['',[ Validators.required]],
        Email:['',[Validators.email , Validators.required]],
        PhoneNumber:['',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
        PhoneNumber2:['',[ Validators.min(1000000000), Validators.max(9999999999)]],
        PhoneNumber3:['',[ Validators.min(1000000000), Validators.max(9999999999)]],

      });
    //#endregion
  }

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
    this.ClinicInfoModel.clinicLogo = files[0];
    // this.FormDataImage.append('EpisodeIamge', files[0]);
  }
  //#endregion
}
