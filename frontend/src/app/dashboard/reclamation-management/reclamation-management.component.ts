import { Component, OnInit, ViewChild } from '@angular/core';
import { Claim } from 'src/app/core/models/claim';
import { ClaimsService } from 'src/app/core/services/claims.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-reclamation-management',
  templateUrl: './reclamation-management.component.html',
  styleUrls: ['./reclamation-management.component.css']
})
export class ReclamationManagementComponent implements OnInit {
  closeResult: string;
  @ViewChild('claimModal') claimModal: any;
  showDeleteMessage: boolean = false;




  
  


  constructor(private claimsService:ClaimsService,private router: Router ,private modalService: NgbModal) { }
  
  claims:Claim[];
  c: Claim = new Claim();
  claimDetails: Claim;
  searchClaimId: number;
  

  ngOnInit(): void {
    this.getAllClaims();
  }
  
   getAllClaims(): void{
    this.claimsService.getAllClaims().subscribe(data =>{
         this.claims = data ;
     });
 }
 rejeterClaim(claimId :number) {
  this.claimsService.DeleteClaim(claimId)
  
  .subscribe(() => {
    console.log('claim supprimé avec succès.');
    this.showDeleteMessage = true;
    // Vous pouvez ajouter ici d'autres actions à effectuer après la suppression du sponsor
    setTimeout(() => {
      this.showDeleteMessage = false;
    }, 3000);
  }, (error) => {
    console.error('Erreur lors de la suppression du claim :', error);
  });
}

UpdateClaim() {
  
  
  
  this.claimsService.UpdateClaim(this.c)
  .subscribe(response => {
    console.log('Claim updated successfully:', response);
    this.getAllClaims(); 
    this.modalService.dismissAll(this.claimModal);
  }, error => {
    console.error('Error updating Claim:', error);
  });
  
}




onSubmitForm(): void {
  console.log(this.c);
 



  this.claimsService.UpdateClaim(this.c).subscribe(response => {
  console.log('Claim updated successfully:', response);
   this.getAllClaims();
   this.modalService.dismissAll(this.claimModal);
  }, error => {
  console.error('Error updating Claim:', error);
});
  }





  openClaimModal() {
    this.modalService.open(this.claimModal);
  }

 openUpdate(claimToUpdate: Claim) {
       this.c = claimToUpdate;
         this.openClaimModal();

    }

    searchClaim(): void {
      if (this.searchClaimId) {
        this.getClaimDetails(this.searchClaimId);
      }
    }

    getClaimDetails(claimId: number): void {
      this.claimsService.getClaimById(claimId).subscribe(
        (claimDetails)=> {
          this.claimDetails = claimDetails;
        },
        (error) => {
          console.error('Error fetching claim details:', error);
          this.claimDetails = null;
        }
      );
    }

    


    

}







 

