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
  @Input() actionType = '';
  @Input() isOpen = false;
  @Output() closed = new EventEmitter();


closeModal() {
  this.closed.emit(false);
}

confirm() {
  console.log("je suis dans la confirmation de suppression ?")
  this.closed.emit(true);
}
}
