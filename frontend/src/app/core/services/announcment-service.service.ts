import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Announcement } from '../models/Announcment';
import { Observable } from 'rxjs';


// const AddType_URL= "http://localhost:9091/announcementType/addAnnonce";
@Injectable({
  providedIn: 'root'
})
export class AnnouncmentServiceService {
  private baseURLAnnonce = "http://localhost:9091/announcement";

  constructor(private http: HttpClient) { }

  // addType(data: any) {
  //   return this.http.post(AddType_URL, data);
  //  }

  //  addAnnouncementWithType(libelle: string, announcement: Announcement,idu:number): Observable<Announcement> {


  addAnnouncementWithType(libelle: string, announcement: Announcement, iduser:number): Observable<Announcement> {
    return this.http.post<Announcement>(`${this.baseURLAnnonce}/addA/${libelle}/${iduser}`, announcement);
  }
  recommendAnnouncements(typeLibelle: string, requiredSupply: number): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseURLAnnonce}/recommend/${typeLibelle}/${requiredSupply}`);
  }

}
