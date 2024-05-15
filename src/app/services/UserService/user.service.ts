import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserLogin } from '../../models/interfaces/user';
import { ErrorRequestHandler } from 'express';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseUrlApi: string = 'http://localhost:8086/users';


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
  }

  decodeToken(token: string): boolean {
    let decodedToken: { email: string, exp: number, iat: number, id: number, role: string };
    decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    
    if (role === "admin") {
     return true;
    } else {
      return false;
    }
  }
}