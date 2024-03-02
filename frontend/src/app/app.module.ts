import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';




import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupClientComponent } from './signup-client/signup-client.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SignupAlumniComponent } from './signup-alumni/signup-alumni.component';
import { ProfileComponent } from './profile/profile.component';
//import { StorageComponent } from './storage/storage.component';
//import {NzFormDirective} from "ng-zorro-antd/form";
//import {NzButtonComponent} from "ng-zorro-antd/button";






@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SignupClientComponent,
    RegisterPageComponent,
    SignupAlumniComponent,
    ProfileComponent,



    
    
   
  
  
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule,
        HttpClientModule,

        ReactiveFormsModule,
        //NzFormDirective,
       // NzButtonComponent,

    ],
  providers: [AuthService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      JwtHelperService] ,

  bootstrap: [AppComponent]
})
export class AppModule { }
