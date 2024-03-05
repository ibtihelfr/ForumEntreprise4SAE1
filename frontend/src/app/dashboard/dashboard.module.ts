import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TablesComponent } from './tables/tables.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserManagementComponent } from './user-management/user-management.component';
import { ForumManagementComponent } from './forum-management/forum-management.component';
import { OffreManagementComponent } from './offre-management/offre-management.component';
import { CondidatureManagementComponent } from './condidature-management/condidature-management.component';
import { SponsorManagementComponent } from './sponsor-management/sponsor-management.component';
import { ReclamationManagementComponent } from './reclamation-management/reclamation-management.component';
import { AnnonceManagementComponent } from './annonce-management/annonce-management.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//import {NzTableCellDirective} from "ng-zorro-antd/table";


@NgModule({
  declarations: [
    TablesComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    UserManagementComponent,
    ForumManagementComponent,
    OffreManagementComponent,
    CondidatureManagementComponent,
    SponsorManagementComponent,
    ReclamationManagementComponent,
    AnnonceManagementComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        // NzTableCellDirective
    ]
})
export class DashboardModule { }
