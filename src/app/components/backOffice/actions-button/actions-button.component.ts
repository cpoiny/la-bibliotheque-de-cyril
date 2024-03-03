import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../models/post.model';


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
@Output() buttonAction = new EventEmitter<Post>();



onClick(): void {
  let data : any;
  this.buttonAction.emit(data);
}


}
