import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-confidentialite',
  standalone: true,
  imports: [HeaderComponent, RouterLink, PageHeaderComponent],
  templateUrl: './confidentialite.component.html',
  styleUrl: './confidentialite.component.css'
})
export class ConfidentialiteComponent {

}
