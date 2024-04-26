import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/UserService/user.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { catchError } from 'rxjs';


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
      console.log("data", data);
      if (data){
        this.decodeToken(data.token);
      } else {
        this.loginForm.reset();
      } 
      
    });
  } else {
    alert('email ou mot de passe incorrect');
  }
}

decodeToken(token : string) :void {
 
  let decodedToken: { email: string, exp: number, iat: number, id: number, role: string };
  decodedToken = jwtDecode(token);

  jwtDecode(token);
  const role = decodedToken.role;
  console.log('decode :', role)
  if (role === "admin"){
    alert("Login success");
      localStorage.setItem('token', token);
      this.router.navigateByUrl('/admin-lbdc/mon-compte')
  } else {
      alert('Login error');
      this.loginForm.reset();
    }
  
  }
}

