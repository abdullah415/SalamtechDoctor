import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

//#region Declare variables
DocumentsForm:FormGroup
Upload_Image:boolean;
//#endregion

  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {

    //#region Init variables
    document.getElementById('Doctorinfo')?.classList.add('OnClick-Style');
    document.getElementById('Signup')?.classList.add('OnClick-Style');
    document.getElementById('Certificates')?.classList.add('OnClick-Style');
    document.getElementById('LegalDocuments')?.classList.add('OnClick-Style');

    this.Upload_Image = false;
    //#endregion
   
      //#region  Register Form Section
      this.DocumentsForm = this.fb.group(
        {
            // Biography:['',[Validators.required]]
          });
      //#endregion
  }

  changeStyle()
  {
   document.getElementById('Congratulations')?.classList.add('OnClick-Style');
  }

    //#region review AND File FormData image from input file
    public imagePath: any;
    imgFront: any = null  ;
    imgBack: any  = null;
    public message: string;

    preview(files:any , typeImg:number) {
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
        if(typeImg == 1)
        {
          this.imgFront = reader.result;
          // this.imgBack = null;
        }
        if(typeImg == 2)
        {
          this.imgBack = reader.result;
          // this.imgFront = null;
        }
      }
      this.Upload_Image = true;

      // this.DoctorInfoModel.profileImage = files[0];
      // this.FormDataImage.append('EpisodeIamge', files[0]);
    }
    //#endregion

}
