import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/Authentication/authentication.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
    private authService : AuthenticationService
  ){}

deconnecter : string = "Deconnexion";
modifier : string = "Enregistrer";



emailForm: FormGroup = new FormGroup({
  emailOld: new FormControl('', Validators.required),
  emailNew: new FormControl('', Validators.required)
});

passwordForm: FormGroup = new FormGroup({
  passwordOld: new FormControl('', Validators.required),
  passwordNew: new FormControl('', Validators.required)
});


onSubmitEmail(): void {
  console.log("emailForm", this.emailForm.value);
}

onSubmitPassword(): void {
  console.log("password", this.passwordForm.value);
}

logout(): void {
  this.authService.logout();
}
}
