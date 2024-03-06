import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';


import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/services/auth.service';
import { SignupClientComponent } from './signup-client/signup-client.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {SignupAlumniComponent} from "./signup-alumni/signup-alumni.component";



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SignupClientComponent,
    RegisterPageComponent,
     SignupAlumniComponent,





  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    NgxQRCodeModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
