import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() title = '';
  @Input() message = '';
  @Input() isOpen = false;
  @Output() closed = new EventEmitter();
  @Output() validated = new EventEmitter();



// Add function to close modal when click on close button
closeModal() {
  this.closed.emit(false);
}

  // Add function to valid modal when click on overlay
confirm() {
  this.validated.emit(true);
}
}
