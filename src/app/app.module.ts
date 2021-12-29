import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Shared/nav/nav.component';
import { FooterComponent } from './Shared/footer/footer.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { SideBarComponent } from './Components/Signup/side-bar/side-bar.component';
import { SignupComponent } from './Components/Signup/signup/signup.component';
import { DoctorInfoComponent } from './Components/Signup/doctor-info/doctor-info.component';
import { CertificatesComponent } from './Components/Signup/certificates/certificates.component';
import { DocumentsComponent } from './Components/Signup/documents/documents.component';
import { CongratulationsComponent } from './Components/Signup/congratulations/congratulations.component';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { OtpComponent } from './Components/Signup/otp/otp.component';
import { MainComponent } from './Components/main/main.component';
import { SignUpMainComponent } from './Components/Signup/sign-up-main.component';


// AoT requires an exported function for factories
export function CreateTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    SideBarComponent,
    SignupComponent,
    DoctorInfoComponent,
    CertificatesComponent,
    DocumentsComponent,
    CongratulationsComponent,
    OtpComponent,
    MainComponent,
    SignUpMainComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: CreateTranslateLoader,
          deps: [HttpClient]
      },
      defaultLanguage:'en'

  })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
