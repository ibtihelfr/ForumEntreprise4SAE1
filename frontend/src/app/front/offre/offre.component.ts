import { Component, OnInit, ViewChild } from '@angular/core';
import { Offre } from 'src/app/core/models/Offre';
import { Review } from 'src/app/core/models/Review';
import { OfferService } from 'src/app/core/services/offer.service';
import { ReviewService } from 'src/app/core/services/review.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  /// LIST AND INSTANCE DECLARATION /// 
  focus:any;
  focus1:any;
  closeResult: string;
  @ViewChild('reviewModal') reviewModal: any;
  showBadWordsAlert: boolean = false;
  reviews:Review[]
  r:Review=new Review();
  

  offers:Offre[]=[];
  suggestedOffers: Offre[] = [];


  /////////////////////////////////////

  constructor(private offreService: OfferService , private reviewService : ReviewService ,private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.getSuggestedOffers(1);
    this.getAllOffers() ;
  }

  getSuggestedOffers(id: number): void {
     // Replace with the actual user ID
    this.offreService.getSuggestedOffers(id)
      .subscribe(data => {
        console.log('Suggested Offers:', data);
        // Handle the suggested offers as needed
        this.suggestedOffers = data ;
      }, error => {
        console.error('Error fetching suggested offers:', error);
      });
  }

  getAllOffers(): void {
    this.offreService.getAllOffers().subscribe(data => {
      this.offers = data.map(offre => ({ ...offre, showFullDescription: false }));
    });
  }

  

  onSubmitReview(): void {
    console.log(this.r);
    /// this.o.idOffre == null || this.o.idOffre === undefined || this.o.idOffre == 0
      if (this.r.comment && this.containsBadWords(this.r.comment)) {
        console.error('Error: The review contains inappropriate language.'); // Bad words alert
        this.showBadWordsAlert = true;  // Show the alert
        return;
      }
    
      // Reset the alert status if the submission is successful
      this.showBadWordsAlert = false;
    
      if (this.r.offre && this.r.offre.idOffre) {
        this.reviewService.addReviewAndAssignToOfferAndUser(this.r, this.r.offre.idOffre, 1 )
          .subscribe(response => {
            console.log('Review saved successfully:', response);
            this.modalService.dismissAll(this.reviewModal);
          }, error => {
            console.error('Error saving review:', error);
          });
      } else {
        console.error('Error: The review must be associated with an offer.'); 
      }
   
  }

  openReviewModal(offer: Offre): void {
    this.r = new Review();
    this.r.offre = offer;
    this.modalService.open(this.reviewModal);
  }


/// ************ BAD WORDS  **************** ////


  containsBadWords(text: string): boolean {
    const badWordsList: string[] = ['zoriga', 'badword2', 'badword3']; // Replace with your list of bad words
    const lowercasedText = text.toLowerCase();
    return badWordsList.some(word => lowercasedText.includes(word));
  }
  
/// ************ LOAD MORE & SHOW LESS **************** ////
displayedOffers: number = 3;

loadMoreOffers(): void {
  if (this.offers) {
    this.displayedOffers += 3;
  }
}
showLessOffers(): void {
  // Ensure the displayedOffers never go below 3
  if (this.offers) {
    // Ensure the displayedOffers never go below 3
    this.displayedOffers = Math.max(this.displayedOffers - 3, 3);
  }
}
/// RATING API ////
setRating(star: number): void {
  this.r.rating = star;
}




}