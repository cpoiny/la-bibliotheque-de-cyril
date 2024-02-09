import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'La bibliotheque de Cyril';

 // Méthode pour arriver en haut d'une page 
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
