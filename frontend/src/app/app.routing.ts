import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {SignupClientComponent} from "./signup-client/signup-client.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {SignupAlumniComponent} from "./signup-alumni/signup-alumni.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes =[
    { path:'signup', component: SignupComponent},
    { path: 'home',             component: HomeComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },
    { path: 'front', loadChildren: () => import('./front/front-routing.module').then(m => m.FrontRoutingModule) },
    { path: 'Student',component: SignupClientComponent},
    { path: 'RegisterPage',component: RegisterPageComponent},
    { path: 'Alumni',component:SignupAlumniComponent},
    {path: 'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent},

    { path: '', redirectTo: 'front', pathMatch: 'full' }
];

@NgModule({
  imports: [
      [RouterModule.forRoot(routes)],
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
      [RouterModule]
  ],
})
export class AppRoutingModule { }
