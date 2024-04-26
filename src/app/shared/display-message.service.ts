import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DisplayMessageService {

  constructor() { }

  displayErrorMessage(messageForm : FormGroup): string | undefined {
      const errorMessage = (messageForm.get('message')?.hasError('required') ? 'Veuillez écrire un message' : "");
      if(errorMessage){
         return errorMessage;
      } else {
        return;
      }
    }

  displayErrorMessageForEmail(emailForm : FormGroup): string | undefined {
    const errorEmail = (emailForm.get('email')?.hasError('required') || emailForm.get('email')?.hasError('pattern')) ? 
    'Une adresse email valide est requise' : "";
    if(errorEmail){
       return errorEmail;
    } else {
      return ;
    }
  }

  displayErrorMessageForUpdateEmail(emailForm : FormGroup): string | undefined {
    let errorEmail : string;
    errorEmail = (emailForm.get('emailOld')?.hasError('required') || emailForm.get('emailOld')?.hasError('pattern')) ? 
    'Une adresse email valide est requise' : "";
    errorEmail = (emailForm.get('emailNew')?.hasError('required') || emailForm.get('emailNew')?.hasError('pattern')) ? 
    'Une adresse email valide est requise' : "";
    if(errorEmail){
       return errorEmail;
    } else {
      return ;
    }
  }
}
