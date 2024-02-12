import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confidentialite',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './confidentialite.component.html',
  styleUrl: './confidentialite.component.css'
})
export class ConfidentialiteComponent {

}
