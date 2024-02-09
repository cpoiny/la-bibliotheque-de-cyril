import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { ConfidentialiteComponent } from '../../pages/confidentialite/confidentialite.component';
import { CookiesComponent } from '../../pages/cookies/cookies.component';
import { ConditionsComponent } from '../../pages/conditions/conditions.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ButtonComponent, ConfidentialiteComponent, CookiesComponent, ConditionsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  title = "Envoyer";
  
  
}
