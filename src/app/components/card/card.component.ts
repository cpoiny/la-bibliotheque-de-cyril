import { UpperCasePipe } from '@angular/common';
import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

@Input() picture!: string;  
@Input() title!: string;
@Input() theme!: string;

}
