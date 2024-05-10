import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/blog/header/header.component';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from '../../../components/blog/page-header/page-header.component';
import { PostService } from '../../../services/PostService/post.service';
import { CardComponent } from '../../../components/card/card.component';
import { UpperCasePipe } from '@angular/common';
import { filter } from 'rxjs';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-postByType',
  standalone: true,
  imports: [HeaderComponent, RouterLink, PageHeaderComponent, CardComponent, RouterOutlet, UpperCasePipe],
  templateUrl: './postByType.component.html',
  styleUrl: './postByType.component.css'
})
export class PostByTypeComponent implements OnInit {
  allPostsPublished: Post[] = [];
  postsByCategory: Post[] = [];
  title: string = "";
  url!: string;



  constructor(
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  // ok
  ngOnInit(): void {

    this.getAllPostsPublished();
    //Methode pour recharger mon composant à chaque changement d'url ensuite
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe((() => {
        this.getPostByCategory();
      }));

  }

  //ok Methode pour récupérer tous les posts
  getAllPostsPublished(): void {
    let posts: Post[] = [];
    this.postService.getAllPosts().subscribe((data => {
      posts = data.filter((post: Post) => post.is_draft === false);
      this.allPostsPublished = posts;
      this.getPostByCategory();
    }));
   
  }

  // ok Méthode pour récupérer les posts en fonction de l'url
  getPostByCategory() {
    this.activatedRoute.paramMap.subscribe(params => {
      const url = params.get('type');
      this.title = url!;
      if (this.allPostsPublished) {
        this.postService.getPostByCategory(this.allPostsPublished, url!).subscribe((data) => {
          this.postsByCategory = data;
        });
      }
    });
  }



}
