import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/services/auth.service"
import {StorageService} from "../core/services/storage.service";
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.user = this.storageService.getUser();
    }
  }
}