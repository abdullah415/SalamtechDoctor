import { Component,OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Coordinates } from 'src/Models/Coordinates';
import { GoogleMapsComponent } from './Shared/google-maps/google-maps.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SalamtechDoctor';

  ngOnInit(){
    // localStorage.setItem("lang","en")
  }

}

