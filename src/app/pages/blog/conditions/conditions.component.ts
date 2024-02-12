import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css'
})
export class ConditionsComponent {

}
