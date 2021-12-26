import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
   i:number=60;
  constructor() { }

  ngOnInit(): void {
    this.counter();
  }

  counter(){ setInterval(() => { if (this.i == 0) { return; }this.i-- }, 1000); }
}
