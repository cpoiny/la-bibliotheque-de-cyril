import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/UserService/user.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';
import { jwtDecode } from 'jwt-decode';
import { DisplayMessageService } from '../../../shared/display-message.service';
import { catchError } from 'rxjs';



@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  title = "Se connecter";
  errorLogin: string | undefined;
  errorPassword: string | undefined;
  isValidLogin!: boolean;
  isPassword! : boolean;




  constructor(
    private userService: UserService,
    private router: Router,
    private errorMessageService: DisplayMessageService
  ) { }

  // TODO : Finir implementer le formulaire avec message d'erreur
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
    ]),
    password: new FormControl('', Validators.required)
  });

  checkLoginAndPassword(): void {
    this.errorLogin = this.errorMessageService.displayErrorMessageForEmail(this.loginForm);
    this.errorPassword = this.errorMessageService.displayErrorMessageForPassword(this.loginForm);
    if (this.errorLogin) {
      this.isValidLogin = false;
    }
    if (this.errorPassword) {
      this.isPassword = false;
    }
  }

  onSubmit(): void {
    this.checkLoginAndPassword();
    const formConnexion = this.loginForm.value;
    const{ email, password} = formConnexion;
    if (this.loginForm.valid) {
      this.userService.login(email, password).subscribe((data) => {
        if (data) {
          this.decodeToken(data.token);
        } else {
          alert('Email ou mot de passe incorrects !');
          this.loginForm.reset();
        }
      }, (error) => {
        console.log(error);
        alert('Email ou mot de passe incorrects !');
        this.loginForm.reset();
      })
    }
  }

  decodeToken(token: string): void {
    let decodedToken: { email: string, exp: number, iat: number, id: number, role: string };
    decodedToken = jwtDecode(token);

    jwtDecode(token);
    const role = decodedToken.role;
    console.log('decode :', role)
    if (role === "admin") {
      alert("Login success");
      localStorage.setItem('token', token);
      this.router.navigateByUrl('/admin-lbdc/toutes-les-publications');
    } else {
      alert('Login error');
      this.loginForm.reset();
    }

  }
}

