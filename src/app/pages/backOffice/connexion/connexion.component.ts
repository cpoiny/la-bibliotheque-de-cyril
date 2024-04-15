import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../components/backOffice/login-form/login-form.component';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

 }