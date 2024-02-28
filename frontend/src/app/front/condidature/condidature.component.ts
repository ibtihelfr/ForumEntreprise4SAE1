import { Component, OnInit } from '@angular/core';
import { Condidature, EtatCondidature } from 'src/app/core/models/condidature';
import { User } from 'src/app/core/models/user';
import { CondidatureService } from 'src/app/core/services/condidature.service'; 
import { NgForm } from '@angular/forms';
import { offre } from 'src/app/core/models/offre'; // Assuming "Offre" is the correct class name

@Component({
  selector: 'app-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css'] 
}) 

export class CondidatureComponent implements OnInit {  
  c: Condidature[]; 
  user: User = { firstName: '', LastName: '' , cv: '', email: '', role: '', idUser: 1 }; // Initialize user object
  offre: offre = { idOffre: 1 }; // Initialize offre object 
  coverLetter: string = '';
  con: Condidature[]; 
  

  constructor(private condidatureService: CondidatureService) {
    this.coverLetter = this.coverLetter; 

   }
 

  ngOnInit(): void {
    this.getAllCondidatures(); 
    
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
    
  

  condidature: Condidature = new Condidature();

  OnSubmit(form: NgForm): void { 
    if (form.invalid) {
      // Handle form validation errors
      return;
    }
    
    const user = {
      id: 1, // Assuming the user ID is 1
      firstName: this.user.firstName,
      lastName: this.user.LastName, 
      coverLetter: this.coverLetter,
    };
  
    // Assign the user to the condidature
    this.condidature.user = user;
  
    // Get the coverLetter value from the form
    const coverLetterValue = form.value.coverLetter;
  
    // Set the coverLetter
    this.condidature.coverLetter = coverLetterValue;
  
    // Set the condidature state
    this.condidature.etatCondidature = EtatCondidature.Waitlisted;
    
    // Add the condidature with the user to the condidature service
    this.condidatureService.addCondidature(this.condidature, this.offre.idOffre, 1).subscribe(
      response => {
        // Handle the response of the request, for example, log it to the console
        console.log('Condidature added successfully:', response);
      },
      error => {
        // Handle errors in case the request fails
        console.error('Error adding condidature:', error);
      }
    );
  }
  
  deleteCondidature(idCondidature: number): void { 
    console.log( idCondidature);
    if (idCondidature === undefined || idCondidature === null) {
      console.error('Invalid condidature id:', idCondidature);
      return;
    }
    
    this.condidatureService.deleteCondidature(idCondidature).subscribe(
      () => {
        console.log('Condidature deleted successfully');
        // Mettez à jour votre liste de condidatures ou effectuez d'autres actions nécessaires après la suppression
      },
      error => {
        console.error('Error deleting condidature:', error);
      }
    );
} 
}
