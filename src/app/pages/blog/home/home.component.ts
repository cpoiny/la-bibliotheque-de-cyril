import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { VerticalLineComponent } from '../../../components/vertical-line/vertical-line.component';
import { CardCategoryComponent } from '../../../components/card-category/card-category.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterLink,VerticalLineComponent,CardCategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
