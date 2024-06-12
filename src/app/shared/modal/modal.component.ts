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


close() {
    this.closed.emit();
}

  // Add function to valid modal when click on overlay
confirm() {
  this.closed.emit(true);
}
}
