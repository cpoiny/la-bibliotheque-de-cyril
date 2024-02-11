import { Component, Signal, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

type IMenu = {
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})



export class HeaderComponent{

menu : Signal<IMenu[]> = signal([
  {
    id: 1,
    icon :"assets/icons/accueil.png",
    title: "Accueil",
    link: "/la_bibliotheque_de_cyril"
  },
  {
    id: 2,
    icon: "assets/icons/loupe.png",
    title: "Recherche",
    link: ""
  },
  {
    id: 3,
    icon :"assets/icons/livre.png",
    title: "Littérature",
    link: "/la_bibliotheque_de_cyril/litterature"
  },
  {
    id: 4,
    icon :"assets/icons/clap.png",
    title: "Cinéma",
    link: "/la_bibliotheque_de_cyril/litterature"
  },
  {
    id: 5,
    icon :"assets/icons/citation.png",
    title: "Citations",
    link: "/la_bibliotheque_de_cyril/litterature"
  }
]);


}

