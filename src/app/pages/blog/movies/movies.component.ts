import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [HeaderComponent, PageHeaderComponent, PageHeaderComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
