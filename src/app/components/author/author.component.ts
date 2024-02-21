import { Component, Input } from '@angular/core';
import { IAuthor } from '../../mocks/author.mock';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
@Input() author! :IAuthor;
}
