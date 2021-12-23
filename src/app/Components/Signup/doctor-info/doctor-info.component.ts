import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
    document.getElementById('Doctorinfo')?.classList.add('OnClick-Style');
    document.getElementById('Signup')?.classList.add('OnClick-Style');
  }

  changeStyle()
  {
  //  document.getElementById('Signup')?.classList.remove('OnClick-Style');
  //  document.getElementById('Doctorinfo')?.classList.remove('OnClick-Style');
   document.getElementById('Certificates')?.classList.add('OnClick-Style');
  }

}
