import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';
import { ConfidentialiteComponent } from '../../../pages/blog/confidentialite/confidentialite.component';
import { CookiesComponent } from '../../../pages/blog/cookies/cookies.component';
import { ConditionsComponent } from '../../../pages/blog/conditions/conditions.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PictureProfileComponent } from '../../picture-profile/picture-profile.component';
import { DisplayMessageService } from '../../../shared/display-message.service';
import { MailService } from '../../../services/MailService/mail.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ButtonComponent, ConfidentialiteComponent, CookiesComponent, ConditionsComponent, ReactiveFormsModule,
  PictureProfileComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor(
    private errorMessageService : DisplayMessageService,
    private mailService : MailService
  ){}

  // Propriété du bouton du formulaire
  title = "Envoyer";

  // Formulaire de contact
  formContact!: FormGroup;
  isInvalidMessage: boolean = false;
  isInvalidEmail: boolean = false;
  errorMessage : string | undefined ;
  errorEmail : string | undefined;

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
    this.errorMessage = this.errorMessageService.displayErrorMessage(this.formContact);
    if (this.errorMessage) this.isInvalidMessage = true;
  }

  displayErrorMessageForEmail(): void {
    this.errorEmail = this.errorMessageService.displayErrorMessageForEmail(this.formContact);
    if (this.errorEmail) this.isInvalidEmail = true;
  }

  //TO DO : Send the message and email to Cyril 
  onSubmit() {
    this.displayErrorMessageForMessage();
    this.displayErrorMessageForEmail();
    // if (this.formContact.valid){
    //   const email = this.formContact.get('email')?.value;
    //   const message = this.formContact.get('message')?.value;
    //   this.mailService.sendEmail(email, message).subscribe(response => {
    //     console.log(response);
    //   });
    this.resetForm();

    }
  

  resetForm(){
    if(this.formContact.valid) {
      this.formContact.reset();
    }
  }

}
