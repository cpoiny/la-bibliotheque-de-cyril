import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { IPost } from '../../../mocks/posts.mock';
import { PostService } from '../../../services/PostService/post.service';
import { CardComponent } from '../../../components/card/card.component';
import { UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-postByType',
  standalone: true,
  imports: [HeaderComponent, RouterLink, PageHeaderComponent, CardComponent, RouterOutlet, UpperCasePipe],
  templateUrl: './postByType.component.html',
  styleUrl: './postByType.component.css'
})
export class PostByTypeComponent implements OnInit {

  postsByCategory: IPost[] = [];
  title: string = "";
  url!: string;


  constructor(
    private postService: PostService,
    //  private router : Router
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getActivatedRoute().subscribe((params: {type: string})=> {
      this.url =  params.type
    });
    const allPosts = this.getAllPosts();
    if (allPosts) {
      this.postsByCategory = this.postService.getPostByCategory(allPosts, this.url);
      this.title = this.url;
    }
  }

  getActivatedRoute(): Observable<any>{
    const typeUrl = this.activatedRoute.params;
    return typeUrl;
  }

  getAllPosts(): IPost[] {
    const posts = this.postService.getAllPosts();
    return posts;
  }







}
