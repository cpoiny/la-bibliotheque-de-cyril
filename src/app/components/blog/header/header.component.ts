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


redirectToRecherche(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
  if(value.length > 0){
    this.postService.getAllPosts().subscribe((posts) => {
      this.postsFromresearch = posts.filter((post) => post.title.includes(value) || post.authors[0].name.includes(value) || post.content.includes(value));
      console.log(this.postsFromresearch);
      if(this.postsFromresearch.length > 0){
        this.postService.sendPostsFromResearch(this.postsFromresearch);
        this.router.navigateByUrl(`/la_bibliotheque_de_cyril/recherche/${value}`);
      }
      else {
        this.router.navigateByUrl(`/la_bibliotheque_de_cyril/recherche/${value}`);
      }
     
    });
}
}

}