import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [HeaderComponent, PageHeaderComponent],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

}
