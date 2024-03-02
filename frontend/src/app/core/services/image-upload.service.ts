import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private uploadUrl = 'http://localhost:8080/api/uploadProfileImage';

  constructor(private http: HttpClient) {
  }

  uploadImage(file: File, user: any) {
    const formData = new FormData();
    formData.append('file', file.name); // Envoyer uniquement le nom du fichier
    formData.append('user', JSON.stringify(user));

    return this.http.post(this.uploadUrl, formData);
  }
}
