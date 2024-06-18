import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/blog/header/header.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
