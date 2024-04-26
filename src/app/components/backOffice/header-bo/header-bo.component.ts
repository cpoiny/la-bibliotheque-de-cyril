import { Component } from '@angular/core';
import { PictureProfileComponent } from '../../picture-profile/picture-profile.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

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

  url!: string;
  
  constructor(
    private activatedRoute: ActivatedRoute
  ){}

  menuBO : IMenu[] = [
    {
      id: 1,
      title: "Mon compte",
      link: "/admin-lbdc/mon-compte"
    },
    {
      id: 2,
      title: "Tous mes posts",
      link: "/admin-lbdc/toutes-les-publications"
    },
    {
      id: 3,
      title: "Publication",
      link: "/admin-lbdc/toutes-les-publications/ajouter"
    }
  ];

  logOff() {
    console.log("se deconnecter");
  }

  ngOnInit(): void {
   this.getUrl();
     
  }

  getUrl():void {
    this.activatedRoute.snapshot('login')
    
   
  }
  }

}
