import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entretien } from 'src/app/core/models/Entretien'; // Assurez-vous d'importer le modèle Entretien

@Injectable({
  providedIn: 'root'
})
export class EntretienService {

  private baseUrl = 'http://localhost:9090'; // Base URL of your Spring Boot backend

  constructor(private http: HttpClient) { }

  getAllEntretiens(): Observable<Entretien[]> {
    return this.http.get<Entretien[]>(`${this.baseUrl}/entretien/all`);
  }

  addEntretien(entretien: Entretien): Observable<Entretien> {
    return this.http.post<Entretien>(`${this.baseUrl}/entretien/add`, entretien);
  }

  updateEntretien(entretien: Entretien): Observable<Entretien> {
    return this.http.put<Entretien>(`${this.baseUrl}/entretien/update`, entretien);
  }

  deleteEntretien(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/entretien/${id}`);
  }
}
