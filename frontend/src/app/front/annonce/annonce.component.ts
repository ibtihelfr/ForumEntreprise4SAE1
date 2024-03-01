import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/core/models/Announcment';
import { TypeAnnonce } from 'src/app/core/models/typeAnnonce';
import { TypeAnnouncementService } from 'src/app/core/services/type-announcement.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {


  types: TypeAnnonce[] = [];
  selectedType: TypeAnnonce | null = null;
  announcements: Announcement[] = [];

  constructor(private typeAnnouncementService: TypeAnnouncementService) {}

  ngOnInit() {
    // this.fetchTypes();
  }

  fetchTypes() {
    this.typeAnnouncementService.getAllTypes()
      .subscribe(
        (types: TypeAnnonce[]) => {
          this.types = types;
        },
        (error) => {
          console.error('Error fetching types:', error);
        }
      );
  }
  onSelectType(type: TypeAnnonce) {
    this.selectedType = type;
    this.fetchAnnouncementsByType(type.idType); // Pass the typeId
  }
  

  fetchAnnouncementsByType(typeId: number) {
    this.typeAnnouncementService.getAnnouncementsByType(typeId)
      .subscribe(
        (announcements: Announcement[]) => {
          this.announcements = announcements;
        },
        (error) => {
          console.error('Error fetching announcements by type:', error);
        }
      );
  }
  ;
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

