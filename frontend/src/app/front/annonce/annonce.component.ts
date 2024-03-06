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

  constructor(private announcementService: TypeAnnouncementService,private AnnService:AnnouncmentServiceService) {}


  ngOnInit(): void {
    this.loadTypes();
    this.getLibelles();
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
  //    this.announcement.typeAnnonce = selectedTypeAnnonce;
      
      this.AnnService.addAnnouncementWithType(selectedTypeAnnonce.libelle,this.announcement,3)//+1 cuurentUser.id
        .subscribe(addedAnnouncement => {
          console.log('Annonce ajoutée:', addedAnnouncement);
          this.announcement = new Announcement();
          this.libelle = '';
        }, error => {
          console.error('Erreur lors de l\'ajout de l\'annonce:', error);
        });
    } else {
      console.error('Libellé sélectionné non trouvé.');
    }
  }

 /* addAnnouncementWithType(): void {
    this.AnnService.addAnnouncementWithType(this.libelle, this.announcement)
      .subscribe(addedAnnouncement => {
        console.log('Annonce ajoutée:', addedAnnouncement);
        this.announcement = new Announcement();
        this.libelle = '';
      }, error => {
        console.error('Erreur lors de l\'ajout de l\'annonce:', error);
      });
  }*/



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
  


  // types: TypeAnnonce[] = [];
  // selectedType: TypeAnnonce | null = null;
  // announcements: Announcement[] = [];

  // constructor(private typeAnnouncementService: TypeAnnouncementService) {}

  // ngOnInit() {
  //   // this.fetchTypes();
  // }

  // fetchTypes() {
  //   this.typeAnnouncementService.getAllTypes()
  //     .subscribe(
  //       (types: TypeAnnonce[]) => {
  //         this.types = types;
  //       },
  //       (error) => {
  //         console.error('Error fetching types:', error);
  //       }
  //     );
  // }
  // onSelectType(type: TypeAnnonce) {
  //   this.selectedType = type;
  //   this.fetchAnnouncementsByType(type.idType); // Pass the typeId
  // }
  

  // fetchAnnouncementsByType(typeId: number) {
  //   this.typeAnnouncementService.getAnnouncementsByType(typeId)
  //     .subscribe(
  //       (announcements: Announcement[]) => {
  //         this.announcements = announcements;
  //       },
  //       (error) => {
  //         console.error('Error fetching announcements by type:', error);
  //       }
  //     );
  // }
  // ;
  }







  // types: TypeAnnonce[] = [];
  // selectedType: TypeAnnonce | null = null;
  // announcements: Announcement[] = [];

  // constructor(private typeAnnouncementService: TypeAnnouncementService) {}

  // ngOnInit() {
  //   this.getAnnouncementsByType();
  // }

  // getAnnouncementsByType() {
  //   this.typeAnnouncementService.getAnnouncementsByType().subscribe((res=>{
  //     console.log(res);
  //   }))
    // this.typeAnnouncementService.getAllTypes()
    //   .subscribe(
    //     (types: TypeAnnonce[]) => {
    //       this.types = types;
    //     },
    //     (error) => {
    //       console.error('Error fetching types:', error);
    //     }
    //   );
  //}

  // fetchAnnouncementsByType(typeId: number) {
  //   this.typeAnnouncementService.getAnnouncementsByType(typeId)
  //     .subscribe(
  //       (announcements: Announcement[]) => {
  //         this.announcements = announcements;
  //       },
  //       (error) => {
  //         console.error('Error fetching announcements by type:', error);
  //       }
  //     );
  // }

  // onSelectType(type: TypeAnnonce) {
  //   this.selectedType = type;
  //   this.fetchAnnouncementsByType(type.idType);
  // }

