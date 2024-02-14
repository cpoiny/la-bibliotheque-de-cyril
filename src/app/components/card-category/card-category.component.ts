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
      text: "agnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam  corporis suscipit laboriosam, isi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit ess",
      img: "assets/illustration/cat-litterature.png",
      link:"/la_bibliotheque_de_cyril/litterature",
      icon: "assets/icons/livre.png"
    },
    {
      id: 2,
      title: "Cinéma",
      text: "agnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam  corporis suscipit laboriosam, isi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit ess",
      img: "assets/illustration/cat-cinema.png",
      link:"/la_bibliotheque_de_cyril/cinema",
     icon: "assets/icons/clap.png"
    },
    {
      id: 3,
      title: "Citations",
      text: "agnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam  corporis suscipit laboriosam, isi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit ess",
      img: "assets/illustration/cat-citation.png",
      link:"/la_bibliotheque_de_cyril/citations",

      icon: "assets/icons/citation.png"
    },
  ]);


}
