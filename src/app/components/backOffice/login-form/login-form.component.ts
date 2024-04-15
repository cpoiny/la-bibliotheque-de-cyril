import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/UserService/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  
  @Output() isAdmin : EventEmitter<boolean> = new EventEmitter();


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
    console.log("data", data);
    if(data) {
      alert("Login success");
      localStorage.setItem('token', data.user.token);
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
