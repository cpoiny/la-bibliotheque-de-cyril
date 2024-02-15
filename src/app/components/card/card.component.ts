import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostComponent } from '../../pages/blog/post/post.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [UpperCasePipe, RouterLink, PostComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

@Input() picture!: string;  
@Input() title!: string;
@Input() theme!: string;
@Input() id! :number;

}
