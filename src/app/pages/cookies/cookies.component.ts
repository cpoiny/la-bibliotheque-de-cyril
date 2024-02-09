import { Component } from '@angular/core';
import { ConfidentialiteComponent } from '../confidentialite/confidentialite.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [RouterModule, ConfidentialiteComponent, HomeComponent],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {

}
