import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/UserService/user.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  
  title = "Se connecter"
  constructor(
    private userService: UserService,
    private router: Router
  ){}

  // TODO : Finir implementer le formulaire avec message d'erreur
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


onSubmit(): void{
  const formData = this.loginForm.value;
  const email = formData.email;
  const password = formData.password;
  if(this.loginForm.valid) {
  this.userService.login(email, password).subscribe((data)=> {
    console.log("token", data);
    const token = data.token;
    if(token) {
      alert("Login success");
      localStorage.setItem('token', token);
      this.router.navigateByUrl('/admin-lbdc/mon-compte')
    } else {
      alert('Login error')
    }
  })
} else {
  alert('email ou mot de passe incorrect');
}
}

}
