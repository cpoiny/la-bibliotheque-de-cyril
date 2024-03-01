import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/blog/header/header.component';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../../components/blog/page-header/page-header.component';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [HeaderComponent, RouterLink, PageHeaderComponent],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css'
})
export class ConditionsComponent {

}
