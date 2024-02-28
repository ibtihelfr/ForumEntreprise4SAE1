// condidature-management.component.ts
import { Component, OnInit } from '@angular/core';
import { Entretien } from 'src/app/core/models/Entretien';
import { Condidature } from 'src/app/core/models/condidature';
import { CondidatureService } from 'src/app/core/services/condidature.service';
import { EntretienService } from 'src/app/core/services/entretien.service';


@Component({
  selector: 'app-condidature-management',
  templateUrl: './condidature-management.component.html',
  styleUrls: ['./condidature-management.component.css']
})
export class CondidatureManagementComponent implements OnInit {
  con: Condidature[]; 
  en : Entretien[];

  constructor(private condidatureService: CondidatureService , private entretientService : EntretienService
  
    ) {}

  ngOnInit(): void {
    this.getAllCondidatures(); 
    this.getALLEntretiens(); 
  }

  getAllCondidatures() {
    this.condidatureService.getAllCondidatures().subscribe(
      (condidatures: Condidature[]) => {
        this.con = condidatures;
        console.log("Received Condidatures:", this.con); // Log the received data to the console
      },
      error => {
        console.error("Error fetching Condidatures:", error);
      } 

    );
  }
  getALLEntretiens() { 
    this.entretientService.getAllEntretiens().subscribe(
      (entretiens: Entretien[]) => { // Update entretiens variable
        this.en = entretiens; // Assign received Entretiens to entretiens array
        console.log("Received Entretiens:", this.en); // Log received Entretiens
      },
      error => {
        console.error("Error fetching Entretiens:", error);
      }  
    );

    } 
    deleteCondidature(idCondidature: number): void { 
      console.log(idCondidature);
      if (idCondidature === undefined || idCondidature === null) {
        console.error('Invalid condidature id:', idCondidature);
        return;
      }
      
      this.condidatureService.deleteCondidature(idCondidature).subscribe(
        () => {
          console.log('Condidature deleted successfully');
          // Rafraîchir la liste des condidatures après la suppression
          this.getAllCondidatures();
        },
        error => {
          console.error('Error deleting condidature:', error);
        }
      );
    } 
  
}
