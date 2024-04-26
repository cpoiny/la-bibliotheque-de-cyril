import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../components/backOffice/login-form/login-form.component';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [LoginFormComponent, HeaderBoComponent],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

 }