import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { OffreManagementComponent } from './offre-management/offre-management.component';
import { ForumManagementComponent } from './forum-management/forum-management.component';
import { ReclamationManagementComponent } from './reclamation-management/reclamation-management.component';
import { SponsorManagementComponent } from './sponsor-management/sponsor-management.component';
import { AnnonceManagementComponent } from './annonce-management/annonce-management.component';
import { CondidatureManagementComponent } from './condidature-management/condidature-management.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      { path: '', component: TablesComponent },
      { path: 'user', component: UserManagementComponent },
      { path: 'offre', component: OffreManagementComponent },
      { path: 'forum', component: ForumManagementComponent },
      { path: 'reclamation', component: ReclamationManagementComponent },
      { path: 'sponsor', component: SponsorManagementComponent },
      { path: 'annonce', component: AnnonceManagementComponent },
      { path: 'condidature', component: CondidatureManagementComponent },

      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
