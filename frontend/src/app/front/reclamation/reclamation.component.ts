import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/core/models/claim';
import { ClaimsService } from 'src/app/core/services/claims.service';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
focus:any;
claim: Claim = new Claim();
cl: Claim = new Claim();

showBadWordsAlert: boolean = false;
claimSubmittedSuccessfully: boolean = false;
formValid: boolean = true;


  constructor(private claimsService: ClaimsService) { }

  ngOnInit(): void {
  }

  likeClaim() {
    this.cl.likes++;
  }

  dislikeClaim() {
    this.cl.dislikes++;
  }

  containsBadWords(text: string): boolean {
    const badWordsList: string[] = ['zoriga', 'badword2', 'badword3']; // Replace with your list of bad words
    const lowercasedText = text.toLowerCase();
    return badWordsList.some(word => lowercasedText.includes(word));
  }

  submitClaim() {
    if (this.claim.message && this.containsBadWords(this.claim.message  as string)) {
      console.error('Error: The review contains inappropriate language.'); // Bad words alert
      this.showBadWordsAlert = true;  // Show the alert
      return;
    }

    if (!this.claim.typeReclamation || !this.claim.dateReclamation || !this.claim.message) {
      this.formValid = false; // Mettez à jour la variable de validation
      return; // Arrêtez la soumission si les champs ne sont pas valides
    }
  
    // Reset the alert status if the submission is successful
    this.showBadWordsAlert = false;
    

    
    this.claimsService.SaveClaim(this.claim).subscribe(
      (response) => {
        console.log('Claim added successfully:', response);
        this.claimSubmittedSuccessfully = true;
        this.claim = new Claim();
      },
      (error) => {
        console.error('Error adding claim:', error);
      }
    );
  }

  

}
