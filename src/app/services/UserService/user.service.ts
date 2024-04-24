import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../../models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {}

  private baseUrlApi : string = 'http://localhost:8086/users';


login(email: string, password: string): Observable<string>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'mon-jeton'
    })
  };
  const url = this.baseUrlApi + "/login";
  return this.http.post<string>(url, {email: email, password: password},httpOptions);
}
}