import { Component, Signal, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PictureProfileComponent } from '../../picture-profile/picture-profile.component';


type IMenu = {
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,PictureProfileComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})



export class HeaderComponent{


  constructor (
    private router: Router
  ){}
menu : Signal<IMenu[]> = signal([
  {
    id: 1,
    icon :"assets/icons/accueil.png",
    title: "Accueil",
    link: ""
  },
  {
    id: 2,
    icon: "assets/icons/loupe.png",
    title: "Recherche",
    link: "/la_bibliotheque_de_cyril/recherche"
  },
  {
    id: 3,
    icon :"assets/icons/livre.png",
    title: "Littérature",
    link: "/la_bibliotheque_de_cyril/publications/litterature"
  },
  {
    id: 4,
    icon :"assets/icons/clap.png",
    title: "Cinéma",
    link: "/la_bibliotheque_de_cyril/publications/cinema"
  },
  {
    id: 5,
    icon :"assets/icons/citation.png",
    title: "Citations",
    link: "/la_bibliotheque_de_cyril/publications/citations"
  }
]);

// implement the search bar function here
searchBar(){
  console.log("search bar clicked");
  this.router.navigateByUrl('/la_bibliotheque_de_cyril/recherche');
}

// implement redirectToRecherche methode
redirectToRecherche(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
  if(value.length > 0){
      this.router.navigateByUrl('/la_bibliotheque_de_cyril/recherche');
}
}

}