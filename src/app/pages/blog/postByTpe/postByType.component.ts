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

  ngOnInit(): void {

    this.allPostsPublished = this.getAllPostsPublished();

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
  getAllPostsPublished(): Post[] {
    let posts : Post[] = [];
    posts = this.postService.getAllPosts().filter((post:Post)=> post.isDraft === false);
    console.log("post", posts);
    return posts;
  }

  // Méthode pour récupérer les posts en fonction de l'url
  getPostByCategory() {
    this.activatedRoute.paramMap.subscribe(params => {
      const url = params.get('type');
      this.title = url!;
      this.postsByCategory = this.postService.getPostByCategory(this.allPostsPublished, url!);
    })
  }

 

}
