import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { ConfidentialiteComponent } from '../../pages/blog/confidentialite/confidentialite.component';
import { CookiesComponent } from '../../pages/blog/cookies/cookies.component';
import { ConditionsComponent } from '../../pages/blog/conditions/conditions.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PictureProfileComponent } from '../picture-profile/picture-profile.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ButtonComponent, ConfidentialiteComponent, CookiesComponent, ConditionsComponent, ReactiveFormsModule,
  PictureProfileComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  // Propriété du bouton du formulaire
  title = "Envoyer";

  // Formulaire de contact
  formContact!: FormGroup;
  isInvalidMessage: boolean = false;
  isInvalidEmail: boolean = false;
  errorMessage : string = "";
  errorEmail : string = "";

  ngOnInit() {

    //Instanciation de mon formulaire
    this.formContact = new FormGroup({
      message: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
         Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
      ])
    })

  }

  displayErrorMessageForMessage(): void {
    this.errorMessage = this.formContact.get('message')?.hasError('required') ? 'Veuillez écrire un message' : "";
    if(this.errorMessage){
      this.isInvalidMessage = true;
    } else {
      this.isInvalidMessage = false;
    }
  }

  displayErrorMessageForEmail(): void {
    this.errorEmail = (this.formContact.get('email')?.hasError('required') || this.formContact.get('email')?.hasError('pattern')) ? 
    'Une adresse email valide est requise' : "";
    if(this.errorEmail){
      this.isInvalidEmail = true;
    } else {
      this.isInvalidEmail = false;
    }
  }

  //TO DO : Send the message and email to Cyril 
  onSubmit() {
    this.displayErrorMessageForMessage();
    this.displayErrorMessageForEmail();
    this.resetForm();
  }

  resetForm(){
    if(this.formContact.valid) {
      this.formContact.reset();
    }
  }

}
