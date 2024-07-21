import { Component, Signal, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PictureProfileComponent } from '../../picture-profile/picture-profile.component';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';


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

  postsFromresearch : Post[] = [];

  constructor (
    private router: Router,
    public postService : PostService
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


redirectToRecherche(event: Event):void {
  const target = event.target as HTMLInputElement;
  const value = target.value.toLowerCase();
  // je veux que ma valeur ne soit pas sensible à la casse
  if(value.length > 0 ){
    if( !this.router.url.includes('recherche')){
      this.router.navigateByUrl(`/la_bibliotheque_de_cyril/recherche/${value}`);
    }
    else {
      this.postService.filterPosts(value);
    }
  }

}

}