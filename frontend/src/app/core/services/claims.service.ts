import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  private baseURL = "http://localhost:9090/reclamation"

  constructor(private httpClient: HttpClient) { }

  getAllClaims(): Observable<Claim[]>{
    return this.httpClient.get<Claim[]>(`${this.baseURL}/allReclamation`);
  }
  
  
  SaveClaim(claim: Claim): Observable<Claim[]> {
    
     return this.httpClient.post<Claim[]>(`${this.baseURL}/addReclamation`, claim);
   }


  
  UpdateClaim(claim: Claim): Observable<Claim[]> {
    return this.httpClient.put<Claim[]>(`${this.baseURL}/updateReclamation/${claim.idReclamation}`, claim);
  }


  DeleteClaim(claimId :number):Observable<Claim[]> {
    return this.httpClient.delete<Claim[]>(`${this.baseURL}/deleteReclamation/${claimId}`);
  }

  getClaimById(claimId :number):Observable<Claim> {
    return this.httpClient.get<Claim>(`${this.baseURL}/{idReclamation}/${claimId}`);
  }
}
