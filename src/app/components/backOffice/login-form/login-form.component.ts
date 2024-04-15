import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/UserService/user.service';


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
      this.isAdmin.emit(true);
    }else {
      this.isAdmin.emit(false)
    }
  })
}

}
