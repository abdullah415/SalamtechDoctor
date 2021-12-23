import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeStyle()
  {
  //  document.getElementById('Signup')?.classList.remove('OnClick-Style');
  //  document.getElementById('Doctorinfo')?.classList.remove('OnClick-Style');
  //  document.getElementById('Certificates')?.classList.remove('OnClick-Style');
  //  document.getElementById('LegalDocuments')?.classList.remove('OnClick-Style');
   document.getElementById('Congratulations')?.classList.add('OnClick-Style');
  }

}
