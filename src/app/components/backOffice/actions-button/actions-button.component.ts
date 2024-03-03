import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-actions-button',
  standalone: true,
  imports: [],
  templateUrl: './actions-button.component.html',
  styleUrl: './actions-button.component.css'
})
export class ActionsButtonComponent {
@Input() src: string = "";
@Input() alt: string = "";
@Output() buttonAction = new EventEmitter<void>();



onClick(): void {
  this.buttonAction.emit()
}


}
