import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient
  ) { }

  public baseUrl = "http://localhost:8086/messages"
  
  sendEmail(email: string, message: string) : Observable<Object> {
   //return this.http.post(this.baseUrl,{ email, message }).map((response)=> response.data);
   return this.http.post<{ email, message }>(this.baseUrl)
    .pipe(map(response => response.data));
  }

  getPostById(id: number): Observable<Post> {
    const url = this.baseUrl+ "/" + id;
    return this.http.get<{ data: Post }>(url)
    .pipe(map(response => response.data));
  }

}
