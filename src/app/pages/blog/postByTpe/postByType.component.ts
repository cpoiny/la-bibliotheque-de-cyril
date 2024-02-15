import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { IPost } from '../../../mocks/posts.mock';
import { PostService } from '../../../services/PostService/post.service';
import { CardComponent } from '../../../components/card/card.component';
import { UpperCasePipe } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-postByType',
  standalone: true,
  imports: [HeaderComponent, RouterLink, PageHeaderComponent, CardComponent, RouterOutlet, UpperCasePipe],
  templateUrl: './postByType.component.html',
  styleUrl: './postByType.component.css'
})
export class PostByTypeComponent implements OnInit {
  allPosts: IPost[] = [];
  postsByCategory: IPost[] = [];
  title: string = "";
  url!: string;


  constructor(
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.allPosts = this.getAllPosts();
    // Méthode appelée une première fois
    this.getPostByCategory();

    //Methode pour recharger mon composant à chaque changement d'url ensuite
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe((() => {
        this.getPostByCategory();
      }));

  }

  // Methode pour récupérer tous les posts
  getAllPosts(): IPost[] {
    const posts = this.postService.getAllPosts();
    return posts;
  }

  // Méthode pour récupérer les posts en fonction de l'url
  getPostByCategory() {
    this.activatedRoute.paramMap.subscribe(params => {
      const url = params.get('type');
      this.title = url!;
      this.postsByCategory = this.postService.getPostByCategory(this.allPosts, url!);
    })
  }
}
