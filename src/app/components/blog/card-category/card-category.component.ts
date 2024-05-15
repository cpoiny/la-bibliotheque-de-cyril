import { Component, Signal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VerticalLineComponent } from '../../vertical-line/vertical-line.component';

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
      title: "Littérature",
      text: "Ici, vous trouverez mes retours sur mes lectures préférées...Principalement de la Littérature classique et européenne, mais je m'aventure parfois outre-atlantique et vers le moyen-orient.",
      img: "assets/illustration/cat-litterature.png",
      link:"/la_bibliotheque_de_cyril/publications/litterature",
      icon: "assets/icons/livre.png"
    },
    {
      id: 2,
      title: "Cinéma",
      text: "Ici, j'évoque les souvenirs et impressions laissées par les plus grandes scènes du cinéma, vous y naviguerez entre les merveilles 'made in nouvelle vague' et le cinéma d'auteur italien en passant par les chefs d'oeuvres américains.",
      img: "assets/illustration/cat-cinema.png",
      link:"/la_bibliotheque_de_cyril/publications/cinema",
     icon: "assets/icons/clap.png"
    },
    {
      id: 3,
      title: "Citations",
      text: "Ici, un aphorisme ou une citation suffisent à résumer une pensée, une idée bien mieux qu'un roman...",
      img: "assets/illustration/cat-citation.png",
      link:"/la_bibliotheque_de_cyril/publications/citations",
      icon: "assets/icons/citation.png"
    },
  ]);


}
