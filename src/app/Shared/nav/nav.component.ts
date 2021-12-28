import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

//#region Declare Variables
DefaultLang:string |null;
//#endregion

  //#region  Constructor
  constructor(private translate:TranslateService){
    // translate.setDefaultLang('en');
    // translate.use('en');
    if(localStorage.getItem("lan") !=null){
      this.DefaultLang = localStorage.getItem("lan");
    }else{
      this.DefaultLang='en'
    }
   }
  //#endregion

  //#region On Init Method
  ngOnInit(): void {


    //#region Init Variables Scope
    if(this.DefaultLang === 'ar'){

      document.getElementsByTagName('html')[0].setAttribute("dir","rtl");
      this.translate.use(this.DefaultLang);
    }else{
      this.DefaultLang = 'en';
      document.getElementsByTagName('html')[0].setAttribute("dir","ltr");
      this.translate.use(this.DefaultLang);
    }
    //#endregion

  }
  //#endregion




  //#region change Language Method
  ChangeLanguage(e:string)
  {
    if(e === 'en')
    {

      console.log(localStorage.getItem("lan"))

      // this.DefaultLang = 'ar';
      localStorage.setItem("lan",'ar')
      document.getElementsByTagName('html')[0].setAttribute("dir","rtl");
      this.translate.use("ar");


    }
    if(e === 'ar')
    {
      localStorage.setItem("lan","en")
      // this.DefaultLang = 'en';
      document.getElementsByTagName('html')[0].setAttribute("dir","ltr");
      this.translate.use("en");

    }

  }
  //#endregion


}
