import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/core/models/Announcment';
import { TypeAnnonce } from 'src/app/core/models/typeAnnonce';
import { AnnouncmentServiceService } from 'src/app/core/services/announcment-service.service';
import { TypeAnnouncementService } from 'src/app/core/services/type-announcement.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  types: TypeAnnonce[] = [];
  announcements: Announcement[] = [];
  selectedTypeId: number | undefined;
  libelles: TypeAnnonce[] = []; // Liste pour stocker les libellés
  announcement: Announcement = new Announcement();
  libelle: string = '';
  annoncesUtilisateur: Announcement[];
  annonces: any[] = [];
  constructor(private announcementService: TypeAnnouncementService,private AnnService:AnnouncmentServiceService) {}


  ngOnInit(): void {
    this.loadTypes();
    this.getLibelles();
    // Appel du service pour récupérer les annonces de l'utilisateur avec l'ID 3 (statique)
    this.AnnService.getAnnouncementsByUserId(3)
      .subscribe(annonces => {
        this.annoncesUtilisateur = annonces;
        console.log(annonces);
      }, error => {
        console.error('Erreur lors de la récupération des annonces:', error);
      });
    // this.loadAnnouncementsForCurrentUser();

  
  }

  loadAnnouncementsForCurrentUser(): void {
    const userId = 3; // Mettez ici l'ID de l'utilisateur actuel
    this.AnnService.getAnnouncementsByUserId(userId)
      .subscribe(annonces => {
        this.annoncesUtilisateur = annonces;
        console.log(annonces);
      }, error => {
        console.error('Erreur lors de la récupération des annonces:', error);
      });
  }

  deleteAnnouncement(id: number) {
    // Appelez le service pour supprimer l'annonce
    this.AnnService.deleteAnnouncement(id)
      .subscribe(() => {
        console.log('Annonce supprimée avec succès');
        // Retirez l'annonce supprimée de la liste locale
        this.annoncesUtilisateur = this.annoncesUtilisateur.filter(annonce => annonce.id !== id);
      }, error => {
        console.error('Erreur lors de la suppression de l\'annonce:', error);
      });
  }


  getLibelles(): void {
    this.announcementService.getAllTypes()
      .subscribe(libelles => {
        this.libelles = libelles; // Stocker les libellés récupérés dans la liste
      }, error => {
        console.error('Erreur lors de la récupération des libellés:', error);
      });
  }




  addAnnouncementWithType(): void {
    // Récupérer le TypeAnnonce correspondant au libellé sélectionné
    const selectedTypeAnnonce = this.libelles.find(libelle => libelle.libelle === this.libelle);
    if (selectedTypeAnnonce) {
      // Appeler le service pour ajouter l'annonce avec le bon type
      this.AnnService.addAnnouncementWithType(selectedTypeAnnonce.libelle, this.announcement, 3) //+1 cuurentUser.id
        .subscribe(addedAnnouncement => {
          console.log('Annonce ajoutée:', addedAnnouncement);
          // Ajouter l'annonce ajoutée à la liste locale pour l'afficher immédiatement
          this.annoncesUtilisateur.push(addedAnnouncement);
          // Réinitialiser l'annonce et le libellé après l'ajout
          this.announcement = new Announcement();
          this.libelle = '';
        }, error => {
          console.error('Erreur lors de l\'ajout de l\'annonce:', error);
        });
    } else {
      console.error('Libellé sélectionné non trouvé.');
    }
  }
  




  // addAnnouncementWithType(): void {
  //   // Récupérer le TypeAnnonce correspondant au libellé sélectionné
  //   const selectedTypeAnnonce = this.libelles.find(libelle => libelle.libelle === this.libelle);
  //   if (selectedTypeAnnonce) {
  //     // Appeler le service pour ajouter l'annonce avec le bon type
  //     this.AnnService.addAnnouncementWithType(selectedTypeAnnonce.libelle, this.announcement, 3) //+1 cuurentUser.id
  //       .subscribe(addedAnnouncement => {
  //         console.log('Annonce ajoutée:', addedAnnouncement);
  //         // Ajouter l'annonce ajoutée à la liste locale pour l'afficher immédiatement
  //         this.annoncesUtilisateur.push(addedAnnouncement);
  //         // Réinitialiser l'annonce et le libellé après l'ajout
  //         this.announcement = new Announcement();
  //         this.libelle = '';
  //       }, error => {
  //         console.error('Erreur lors de l\'ajout de l\'annonce:', error);
  //       });
  //   } else {
  //     console.error('Libellé sélectionné non trouvé.');
  //   }


  // }
  loadTypes() {
    this.announcementService.getAllTypes().subscribe(types => {
      this.types = types;
    });
  }

  onTypeChange() {
    if (this.selectedTypeId) {
      this.announcementService.getAnnouncementsByType(this.selectedTypeId).subscribe(announcements => {
        this.announcements = announcements;
      });
    }
  }
}