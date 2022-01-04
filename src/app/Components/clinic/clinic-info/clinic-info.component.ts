import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsComponent } from 'src/app/Shared/google-maps/google-maps.component';
import { Area } from 'src/Models/Area';
import { City } from 'src/Models/City';
import { Coordinates } from 'src/Models/Coordinates';
import { ClinicInfoService } from 'src/Service/ClinicInfo/clinic-info.service';
import { LookupsService } from 'src/Service/Lockups/lookups.service';
import { ClinicInfoModel } from './../../../../Models/clinicInfoModel';

@Component({
  selector: 'app-clinic-info',
  templateUrl: './clinic-info.component.html',
  styleUrls: ['./clinic-info.component.css'],
})
export class ClinicInfoComponent implements OnInit {
  coordinates: Coordinates;
  Cities: City[];
  Areas: Area[];

  openGoogelMapsModal() {
    const modalRef = this.modalService.open(GoogleMapsComponent, {
      scrollable: true,
      // windowClass: 'myCustomModalClass',
      // keyboard: false,
      // backdrop: 'static'
    });
    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything',
    };

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => {
        this.coordinates = result;
      },
      (reason) => {}
    );
  }

  ClinicInfoForm: FormGroup;
  ClinicInfoModel: ClinicInfoModel;
  CountryId:any
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private lookupService: LookupsService,
    private ClinicService:ClinicInfoService
  ) {
    this.coordinates = {} as Coordinates;
  }

  ngOnInit(): void {

    // $(document).ready(function() {
    //     $('#example-getting-started').multiselect();
    // });


    this.GetCities();

    this.GetAreas();

    this.ClinicInfoModel = new ClinicInfoModel();


    //#region  Register Form Section
    this.ClinicInfoForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      NameAr: ['', [Validators.required, Validators.minLength(3)]],
      clinicLogo: ['', [Validators.required]],
      Email: ['', [Validators.email, Validators.required]],
      PhoneNumber: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      PhoneNumber2: [
        '',
        [Validators.min(1000000000), Validators.max(9999999999)],
      ],
      PhoneNumber3: [
        '',
        [Validators.min(1000000000), Validators.max(9999999999)],
      ],
      City: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      Area: ['', [Validators.required]],
      BuildingNumber: ['', [Validators.required]],
      FloorNumber: ['', [Validators.required]],
      ApartmentNumber: ['', [Validators.required]],
      FixedFee: ['', [Validators.required]],
    });
    //#endregion
  }

  //#region review AND File FormData image from input file
  public imagePath: any;
  imgURL: any = '../../../../assets/img/DoctorImg/Rectangle 2.png';
  public message: string;

  preview(files: any) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
    this.ClinicInfoModel.clinicLogo = files[0];
    // this.FormDataImage.append('EpisodeIamge', files[0]);
  }
  //#endregion

  //#region git Cities
  GetCities() {
    this.lookupService.GetCities('en').subscribe(
      (res) => {
        this.Cities = res.Data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //#endregion

  //#region git Cities
  GetAreas() {
    this.lookupService.GetAreas('en').subscribe(
      (res) => {
        this.Areas = res.Data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //#endregion

  //#region Selectedcity
  SelectCity(event:any){
    this.ClinicInfoForm.controls.City=event.target.value;
    let city =this.Cities.find(city=> city.Id == event.target.value)
    this.CountryId = city?.CountryId
  }
  //#endregion

  //#region SelectedArea
  SelectArea(event:any){
    this.ClinicInfoForm.controls.Area = event.target.value;
    console.log(event.target.value)
  }
  //#endregion

  //#region Create
  CreateClinic(lang:string,ClinicForm:FormData){
    this.ClinicService.CreateClinic(lang,ClinicForm).subscribe((res)=>{
      console.log(res)
    },
    (err)=>{console.log(err)})
  }
  //#endregion

  //#region
  submitClinic(){
    const formData = new FormData();

    formData.append('HealthEntityPhoneDtos',[+this.ClinicInfoForm.controls.PhoneNumber.value,+this.ClinicInfoForm.controls.PhoneNumber2.value,+this.ClinicInfoForm.controls.PhoneNumber3.value] as unknown as Blob)
    // formData.append('HealthEntityServiceDtos',[] as unknown as Blob)
    formData.append('Name',this.ClinicInfoForm.controls.Name.value)
    formData.append('NameAr',this.ClinicInfoForm.controls.NameAr.value)
    formData.append('Email',this.ClinicInfoForm.controls.Email.value)
    formData.append('CountryId',this.CountryId as unknown as Blob)
    formData.append('CityId',this.ClinicInfoForm.controls.City as unknown as Blob)
    formData.append('AreaId',this.ClinicInfoForm.controls.Area as unknown as Blob)
    formData.append('FixedFee',+this.ClinicInfoForm.controls.FixedFee.value as unknown as Blob)
    formData.append('Address',this.ClinicInfoForm.controls.Address.value)
    formData.append('BlockNo',+this.ClinicInfoForm.controls.BuildingNumber.value as unknown as Blob)
    formData.append('FloorNo',+this.ClinicInfoForm.controls.FloorNumber.value as unknown as Blob)
    formData.append('Inactive',"true")
    formData.append('clinicLogo',this.ClinicInfoModel.clinicLogo)

    this.CreateClinic('en',formData)
  }


}
