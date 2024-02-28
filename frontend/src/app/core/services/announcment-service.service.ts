import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const AddType_URL= "http://localhost:9091/announcement/type/add"
@Injectable({
  providedIn: 'root'
})
export class AnnouncmentServiceService {

   constructor(private http:HttpClient) { }

  addType(data: any) {
    return this.http.post(AddType_URL, data);
   }
}
