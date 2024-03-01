import { Component } from '@angular/core';
import { PictureProfileComponent } from '../../picture-profile/picture-profile.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

type IMenu = {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-header-bo',
  standalone: true,
  imports: [PictureProfileComponent, RouterLink, RouterLinkActive],
  templateUrl: './header-bo.component.html',
  styleUrl: './header-bo.component.css'
})
export class HeaderBoComponent {

  menuBO : IMenu[] = [
    {
      id: 1,
      title: "Mon compte",
      link: "/admin_lbdc_connexion"
    },
    {
      id: 2,
      title: "Tous mes posts",
      link: " "
    },
    {
      id: 3,
      title: "Publication",
      link: "/lbdc_cyril/add_post"
    }
  ];



}
