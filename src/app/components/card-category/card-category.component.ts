import { Component, Signal, signal } from '@angular/core';
import { VerticalLineComponent } from '../vertical-line/vertical-line.component';
import { RouterLink } from '@angular/router';

type ICategoryCard = {
  id: number;
  title: string;
  text: string;
  img: string;
  link: string;
  icon: string;
}


@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [VerticalLineComponent, RouterLink],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {


  // Afficher mes catégories sur la home page"
  cardsCategory: Signal<ICategoryCard[]> = signal([
    {
      id: 1,
      title: "Litterature",
      text: "Corporis suscipit laboriosam, isi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.",
      img: "assets/illustration/cat-litterature.png",
      link:"/la_bibliotheque_de_cyril/publications/litterature",
      icon: "assets/icons/livre.png"
    },
    {
      id: 2,
      title: "Cinéma",
      text: "Agnam aliquam quaerat voluptatem.nsequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit ess.",
      img: "assets/illustration/cat-cinema.png",
      link:"/la_bibliotheque_de_cyril/publications/cinema",
     icon: "assets/icons/clap.png"
    },
    {
      id: 3,
      title: "Citations",
      text: "Isi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
      img: "assets/illustration/cat-citation.png",
      link:"/la_bibliotheque_de_cyril/publications/citations",
      icon: "assets/icons/citation.png"
    },
  ]);


}
