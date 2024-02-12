import { Component } from '@angular/core';
import { ConfidentialiteComponent } from '../confidentialite/confidentialite.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [RouterLink, ConfidentialiteComponent, HeaderComponent, PageHeaderComponent],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {

}
