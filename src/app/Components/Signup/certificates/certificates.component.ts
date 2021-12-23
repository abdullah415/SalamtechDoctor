import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('Doctorinfo')?.classList.add('OnClick-Style');
    document.getElementById('Signup')?.classList.add('OnClick-Style');
    document.getElementById('Certificates')?.classList.add('OnClick-Style');

  }

  changeStyle()
  {
  //  document.getElementById('Signup')?.classList.remove('OnClick-Style');
  //  document.getElementById('Doctorinfo')?.classList.remove('OnClick-Style');
  //  document.getElementById('Certificates')?.classList.remove('OnClick-Style');
   document.getElementById('LegalDocuments')?.classList.add('OnClick-Style');
  }

}
