import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

}
