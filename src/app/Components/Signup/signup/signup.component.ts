import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('DoctorinfoRef') DoctorinfoRef: ElementRef<HTMLInputElement>;


  constructor() {}
    

  
   ngOnInit(): void {
     
   }

   changeStyle()
   {
    // document.getElementById('Signup')?.classList.remove('OnClick-Style');
    document.getElementById('Doctorinfo')?.classList.add('OnClick-Style');
    // document.getElementById('Certificates')?.classList.remove('OnClick-Style');
    // document.getElementById('LegalDocuments')?.classList.remove('OnClick-Style');
    // document.getElementById('Signup')?.classList.remove('OnClick-Style');
    // document.getElementById('Doctorinfo')?.classList.add('OnClick-Style');

    // this.DoctorinfoRef.nativeElement.style.color="#262D70";
    // this.DoctorinfoRef.nativeElement.style.borderLeftColor="#262D70";
    // this.DoctorinfoRef.nativeElement.style.color="red";
   }


}
