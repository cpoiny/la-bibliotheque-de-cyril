import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserLogin } from '../../models/interfaces/user';
import { ErrorRequestHandler } from 'express';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseUrlApi: string =  environment.baseUrl + "users";


  /**
   * Log in a user with the email and password provided in the form of the application.
   * @param email The user's email.
   * @param password The user's password.
   * @returns An Observable that emits a UserLogin object.
   * UserLogin object contains a message and a token.
   */
  login(email: string, password: string): Observable<UserLogin> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'mon-jeton'
      })
    };
    const url = this.baseUrlApi + "/login";
    return this.http.post<UserLogin>(url, { email: email, password: password }, httpOptions)
      .pipe(catchError((error: ErrorRequestHandler) => {
        console.log("error", error);
        return throwError(error);
      }));
  };

  /**
   * Decodes a JWT token and checks if the user has an "admin" role.
   * @param token - The JWT token to decode.
   * @returns A boolean indicating whether the user has an "admin" role or not.
   */
  decodeToken(token: string): boolean {
    let decodedToken: { email: string, exp: number, iat: number, id: number, role: string };
    decodedToken = jwtDecode(token);
    const role = decodedToken.role;

    if (role === "admin") {
      return true;
    } else {
      return false;
    }
  };
}