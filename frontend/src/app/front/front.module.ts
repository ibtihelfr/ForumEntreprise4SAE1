import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { OffreComponent } from './offre/offre.component';
import { CondidatureComponent } from './condidature/condidature.component';
import { SponsorDetailsComponent } from './sponsor-details/sponsor-details.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { PackComponent } from './pack/pack.component';
import { ForumComponent } from './forum/forum.component';
import { ProfileComponent } from './profile/profile.component';
import { TypeAnnouncementComponent } from '../front/type-announcement/type-announcement.component';

@NgModule({
  declarations: [
    FrontComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    SponsorComponent,
    OffreComponent,
    CondidatureComponent,
    SponsorDetailsComponent,
    AnnonceComponent,
    ReclamationComponent,
    PackComponent,
    ForumComponent,
    ProfileComponent,
    TypeAnnouncementComponent

  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FrontModule { }
