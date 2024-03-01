import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Author } from '../../../models/author.model';


@Component({
  selector: 'app-author',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
@Input() author! :Author
}
