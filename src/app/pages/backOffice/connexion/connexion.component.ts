import { Component } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/UserService/user.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [HeaderBoComponent, ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  isAdmin: boolean = false;

  constructor(
    private userService: UserService
  ){}

  // TODO : Finir implementer le formulaire avec message d'erreur
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


onSubmit() {
  const formData = this.loginForm.value;
  const email = formData.email;
  const password = formData.password;
  if(this.loginForm.valid) {
    this.login(email, password);
  }
}

login(email: string, password: string){
  this.userService.login(email, password).subscribe((data)=> {
    const user = data.user;
    if(user.token && user.role === "admin") {
      this.isAdmin = true;
    }
  })
}

}