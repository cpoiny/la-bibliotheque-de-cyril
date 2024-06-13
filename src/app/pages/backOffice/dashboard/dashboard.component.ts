import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/Authentication/authentication.service';
import { DisplayMessageService } from '../../../shared/display-message.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
    private authService : AuthenticationService,
   private errorMessageService : DisplayMessageService
    
  ){}

deconnecter : string = "Deconnexion";
modifier : string = "Enregistrer";
errorMessage: string | undefined;
requiredPassword: string | undefined;
isValidEmail? :boolean;
isPassword? : boolean;

emailForm: FormGroup = new FormGroup({
  emailOld: new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
  ]),
  emailNew: new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
  ])
});

passwordForm: FormGroup = new FormGroup({
  passwordOld: new FormControl('', Validators.required),
  passwordNew: new FormControl('', Validators.required)
});


onSubmitEmail(): void {
  this.checkEmail();
  // aller vers le back et mettre à jour si l'ancien email fourni est correct sinon retourner une erreur de mise à jour
}

checkEmail(): void {
  this.errorMessage = this.errorMessageService.displayErrorMessageForUpdateEmail(this.emailForm);
  if (this.errorMessage) this.isValidEmail = false;
}

onSubmitPassword(): void {
  this.checkPassword();
}

checkPassword(): void {
  this.requiredPassword = this.errorMessageService.displayErrorMessageForPassword(this.passwordForm);
  if (this.requiredPassword) this.isPassword = false;
}

logout(): void {
  this.authService.logout();
}
}
