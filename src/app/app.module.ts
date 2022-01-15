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
import { SignUpMainComponent } from './Components/Signup/sign-up-main.component';
import { MainComponent } from './Components/main/main.component';
import { MainNavComponent } from './Shared/main-nav/main-nav.component';
import { UploadFileComponent } from './Shared/upload-file/upload-file.component';
import { ClinicInfoMainComponent } from './Components/clinic/clinic-info-main.component';
import { ClinicInfoComponent } from './Components/clinic/clinic-info/clinic-info.component';
import { ClinicGalaryComponent } from './Components/clinic/clinic-galary/clinic-galary.component';
import { ClinicSchedualComponent } from './Components/clinic/clinic-schedual/clinic-schedual.component';
import { ClinicSidebarComponent } from './Components/clinic/clinic-sidebar/clinic-sidebar.component';
import { GoogleMapsComponent } from './Shared/google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HomeVisitComponent } from './Components/Service/home-visit/home-visit.component';
import { VideoCallComponent } from './Components/Service/video-call/video-call.component';
import { CallComponent } from './Components/Service/call/call.component';
import { ChatComponent } from './Components/Service/chat/chat.component';
import { MainServiceComponent } from './Components/Service/main-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InterceptorsProvider } from 'src/Interceptor/interceptors';
import { ClinicManagerComponent } from './Components/clinic-manager/clinic-manager.component';
import { MainClinicComponent } from './Components/clinic-manager/main/main-clinic.component';



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
    SignUpMainComponent,
    MainComponent,
    MainNavComponent,
    UploadFileComponent,
    ClinicInfoMainComponent,
    ClinicInfoComponent,
    ClinicGalaryComponent,
    ClinicSchedualComponent,
    ClinicSidebarComponent,
    GoogleMapsComponent,
    HomeVisitComponent,
    VideoCallComponent,
    CallComponent,
    ChatComponent,
    MainServiceComponent,
    ClinicManagerComponent,
    MainClinicComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyAy8wLUdHfHVmzlWLNPVF96SO0GY1gP4Po',
      libraries: ['places']
    }),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: CreateTranslateLoader,
          deps: [HttpClient]
      },
      defaultLanguage:'en'}),
      BrowserAnimationsModule,
      ToastrModule.forRoot(), // ToastrModule added
    ],
    //
  providers: [InterceptorsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
