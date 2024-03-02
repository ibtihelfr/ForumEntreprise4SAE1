import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {ForumService} from "./forum.service";
import {StorageService} from "./storage.service";
const BASE_URL = 'http://localhost:9090/user/';


export const AUTH_HEADER='authorization';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from "@angular/router";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'

})
export class AuthService {

  constructor(private httpClient: HttpClient,private storageService: StorageService,public jwtHelper: JwtHelperService ,private router:Router){
  }

  signupCompany(signupRequestDto: any): Observable<any> {
    return this.httpClient.post(BASE_URL + 'Company/signup', signupRequestDto)
  }

  signupClient(signupRequestDto: any): Observable<any> {
    return this.httpClient.post(BASE_URL + 'Client/signup', signupRequestDto)
  }

  signupAlumni(signupRequestDto: any): Observable<any> {
    return this.httpClient.post(BASE_URL + 'Alumni/signup', signupRequestDto)
  }


   /* login(email: string, password: string): Observable<any> {
        return this.httpClient.post(`http://localhost:9090/user/authenticate`, { email, password }, { observe: 'response', responseType: 'text' })
            .pipe(
                map(response => {
                    try {
                        // Check the Content-Type of the response
                        const contentType = response.headers.get('Content-Type');
                        console.log(`Content-Type: ${contentType}`);

                        // Check if the JWT token is present in the response
                        if (response.body) {
                            // Store the JWT token in local storage
                            localStorage.setItem('token', response.body);

                            // Decode the JWT token to get user information
                            const decodedToken = this.jwtHelper.decodeToken(response.body);
                            console.log('Decoded token:', decodedToken); // Print the decoded token

                            localStorage.setItem('loggedUser', decodedToken.sub); // Use 'sub' instead of 'username'
                            localStorage.setItem('isloggedIn', String(true));
                            localStorage.setItem('role', decodedToken.role);

                        }
                        return response.body;
                    } catch (error) {
                        console.error('Error processing response:', error);
                        throw error;
                    }
                }),
                catchError(error => {
                    console.error('Error during login:', error);
                    return throwError(error);
                })
            );
    }*/
    login(email: string, password: string): Observable<any> {
        return this.httpClient.post(`http://localhost:9090/user/authenticate`, { email, password }, { observe: 'response', responseType: 'text' })
            .pipe(
                map(response => {
                    try {
                        // Check the Content-Type of the response
                        const contentType = response.headers.get('Content-Type');
                        console.log(`Content-Type: ${contentType}`);

                        // Check if the JWT token is present in the response
                        if (response.body) {
                            console.log('Raw token:', response.body); // Log the raw token

                            // Store the JWT token in local storage
                            localStorage.setItem('token', response.body);

                            // Decode the JWT token to get user information
                            const decodedToken = this.jwtHelper.decodeToken(response.body);
                            console.log('Decoded token:', decodedToken); // Print the decoded token

                            localStorage.setItem('loggedUser', decodedToken.sub); // Use 'sub' instead of 'username'
                            localStorage.setItem('isloggedIn', String(true));
                            localStorage.setItem('role', decodedToken.role);
                        }
                        return response.body;
                    } catch (error) {
                        console.error('Error processing response:', error);
                        throw error;
                    }
                }),
                catchError(error => {
                    console.error('Error during login:', error);
                    return throwError(error);
                })
            );
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');

        // Vérifiez si le token a expiré
        if (!token) {
            return false;
        }

        const isExpired = this.jwtHelper.isTokenExpired(token);

        return !isExpired;
    }

    public decodeToken(): any {
        const token = localStorage.getItem('token');

        if (!token) {
            return null;
        }

        return this.jwtHelper.decodeToken(token);
    }
    getAllUser(): Observable<User[]>{
        return this.httpClient.get<User[]>(BASE_URL + 'allUser');
    }
    disableUser(id: number): Observable<string> {
        return this.httpClient.put(BASE_URL+`ban/${id}`, {}, { responseType: 'text' });
    }

    enableUser(id: number): Observable<string> {
        return this.httpClient.put(BASE_URL+`Disban/${id}`, {}, { responseType: 'text' });
    }





}
