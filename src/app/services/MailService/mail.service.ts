import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient
  ) { }

  public baseUrl = "http://localhost:8086/messages/"
  
  sendEmail(email: string, message: string) : Observable<Object> {
    const url = this.baseUrl + "/send";
    const messageToSend : Message = new Message(
      email =  email,
      message  = message
    );
   //return this.http.post(this.baseUrl,{ email, message }).map((response)=> response.data);
   return this.http.post(url, {messageToSend});
  }



}
