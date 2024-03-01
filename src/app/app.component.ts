import { Component,  } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/blog/footer/footer.component';
import { PageHeaderComponent } from './components/blog/page-header/page-header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FooterComponent, PageHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'La bibliotheque de Cyril';
  isBackOffice : boolean = false;
  url : string = "";

 // Méthode pour arriver en haut d'une page 
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  
    ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
        this.url = event.url;
        this.checkUrl(this.url);
      }
    });
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }



checkUrl(url: string): void {
  if (url.includes("cyril")) {
    this.isBackOffice = false;
  } else {
    this.isBackOffice = true;
  }
}
 
}


