import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-cat-bo',
  standalone: true,
  imports: [],
  templateUrl: './button-cat-bo.component.html',
  styleUrl: './button-cat-bo.component.css'
})
export class ButtonCatBOComponent {

  @Input() title!: string;
}
