import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeAnnonce } from '../models/typeAnnonce';
import { Observable } from 'rxjs';
import { Announcement } from '../models/Announcment';

@Injectable({
  providedIn: 'root'
})
export class TypeAnnouncementService {
  private baseURL = "http://localhost:9091/announcementtype";
  private baseURLAnnonce = "http://localhost:9091/announcement";


  constructor(private http: HttpClient) { }

  getAllTypes(): Observable<TypeAnnonce[]> {
    return this.http.get<TypeAnnonce[]>(`${this.baseURL}/findall`);
  }
  
  SaveType(type: TypeAnnonce): Observable<TypeAnnonce> { // Corrected return type
    return this.http.post<TypeAnnonce>(`${this.baseURL}/add`, type); // Corrected interpolation syntax
  }

  DeleteType(idType: number): Observable<TypeAnnonce[]> {
    return this.http.delete<TypeAnnonce[]>(`${this.baseURL}/delete/${idType}`);
  }

  getAnnouncementsByType(typeId: number): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseURLAnnonce}/byType/${typeId}`);
  }
  
  
  
}
