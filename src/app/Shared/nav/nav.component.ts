import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

//#region Declare Variables
DefaultLang!:string;
//#endregion

  //#region  Constructor
  constructor(private translate:TranslateService){ 
    // translate.setDefaultLang('en');
    translate.use('en');
   }
  //#endregion

  //#region On Init Method
  ngOnInit(): void {

    //#region Init Variables Scope
    this.DefaultLang = "en";
    //#endregion

  }
  //#endregion


 

  //#region change Language Method
  ChangeLanguage(e:string)
  {
    if(e == 'en')
    {
      this.translate.use(e);
      document.getElementsByTagName('html')[0].setAttribute("dir","rtl");
      this.DefaultLang = 'ar';
    }
    if(e == 'ar')
    {
      this.translate.use(e);
      document.getElementsByTagName('html')[0].setAttribute("dir","ltr");
      this.DefaultLang = 'en';
    }

  }
  //#endregion

  
}
