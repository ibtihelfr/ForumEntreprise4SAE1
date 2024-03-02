import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {User} from "../../core/models/user";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
users:User[];
  constructor(private userService: AuthService) {
  }

  ngOnInit(): void {
    this.GetAllUsers();
  }

  GetAllUsers() {
    this.userService.getAllUser().subscribe(data => {
      this.users = data;
      console.log(data);
    });

  }

  banUser(id: number, banDuration: number) {
    this.GetAllUsers()
    console.time("banUser"); // Démarrer le chronomètre pour le bannissement
    this.userService.disableUser(id).subscribe(() => {
      setTimeout(() => {
        console.timeEnd("banUser"); // Arrêter le chronomètre une fois la durée de bannissement écoulée
        this.userService.enableUser(id).subscribe(() => {
          this.GetAllUsers();
        });
      }, banDuration);
    });
  }

  onBanButtonClick(userid: number) {
    console.log(userid);
    this.banUser(userid, 2 * 60 * 1000);


  }
  onDisBanButtonClick(userId: number) {
    this.userService.enableUser(userId).subscribe(response => {
      console.log(response); // Vous verrez le message de confirmation ici
      if (response === 'User banned successfully') {
        this.GetAllUsers();
      } else {
        console.log(response); // Vous verrez le message de confirmation ici

      }
    });
  }



}