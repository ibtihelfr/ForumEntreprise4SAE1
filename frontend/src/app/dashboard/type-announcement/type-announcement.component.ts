import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnouncmentServiceService } from 'src/app/core/services/announcment-service.service';

@Component({
  selector: 'app-type-announcement',
  templateUrl: './type-announcement.component.html',
  styleUrls: ['./type-announcement.component.css']
})
export class TypeAnnouncementComponent implements OnInit {

  typeAnnonce = {
    libelle: "libelle"
  };
    submitted = false;

  constructor(private Ls:AnnouncmentServiceService,private route:Router){

  }
  ngOnInit(): void {
  }

  saveType() {
    const data = {
      libelle: this.typeAnnonce.libelle
    };


    this.Ls.addType(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  newadd() {
    this.submitted = false;
    this.typeAnnonce = {
      libelle: ""
    };
  }



}
