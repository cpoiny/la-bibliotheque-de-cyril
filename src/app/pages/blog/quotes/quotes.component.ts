import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

}
