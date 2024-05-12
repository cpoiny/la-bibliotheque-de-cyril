import { Component, Input, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../components/blog/page-header/page-header.component';
import { VerticalLineComponent } from '../../../components/vertical-line/vertical-line.component';
import { HeaderComponent } from '../../../components/blog/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/PostService/post.service';

import { DatePipe, Location, UpperCasePipe } from '@angular/common';
import { AuthorComponent } from '../../../components/blog/author/author.component';
import { Post } from '../../../models/post.model';
import { Author } from '../../../models/author.model';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PageHeaderComponent, VerticalLineComponent, HeaderComponent, AuthorComponent, UpperCasePipe, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})


export class PostComponent implements OnInit {

post!: Post;
author!: Author;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPostById();
    //console.log("post to display", this.post);
    this.getAuthorById(this.post);

  }

  getPostById(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe((data) =>{
      this.post = data;
      //console.log("this post by id", this.post, data)
    });
  }

  getAuthorById(post: Post): void {
   // const authorToDisplay = this.postService.getAuthorById(post);
    //this.author = authorToDisplay;
  }

  goBack() {
    this.location.back();
  }
}



