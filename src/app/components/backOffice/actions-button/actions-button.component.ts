import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-actions-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actions-button.component.html',
  styleUrl: './actions-button.component.css'
})
export class ActionsButtonComponent {
@Input() id!: number;

}
