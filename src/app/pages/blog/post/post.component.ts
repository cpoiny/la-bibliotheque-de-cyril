import { Component, Input, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { VerticalLineComponent } from '../../../components/vertical-line/vertical-line.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/PostService/post.service';

import { DatePipe, Location, UpperCasePipe } from '@angular/common';
import { AuthorComponent } from '../../../components/author/author.component';
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
    console.log("post to display", this.post);
    this.getAuthorById(this.post);

  }

  getPostById(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const postToDisplay = this.postService.getPostById(id);
    this.post = postToDisplay[0];
  }

  getAuthorById(post: Post): void {
    const authorToDisplay = this.postService.getAuthorById(post);
    this.author = authorToDisplay;
  }

  goBack() {
    this.location.back();
  }
}



