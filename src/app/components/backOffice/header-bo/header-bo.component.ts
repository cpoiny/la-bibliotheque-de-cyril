import { Component } from '@angular/core';
import { PictureProfileComponent } from '../../picture-profile/picture-profile.component';

@Component({
  selector: 'app-header-bo',
  standalone: true,
  imports: [PictureProfileComponent],
  templateUrl: './header-bo.component.html',
  styleUrl: './header-bo.component.css'
})
export class HeaderBoComponent {

}
