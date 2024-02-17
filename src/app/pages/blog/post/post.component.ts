import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { VerticalLineComponent } from '../../../components/vertical-line/vertical-line.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../../mocks/posts.mock';
import { PostService } from '../../../services/PostService/post.service';
import { IAuthor } from '../../../mocks/author.mock';
import { DatePipe, Location, UpperCasePipe } from '@angular/common';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PageHeaderComponent, VerticalLineComponent, HeaderComponent, UpperCasePipe, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})


export class PostComponent implements OnInit {

  post! : IPost;
  author!: IAuthor;
  retour: string = "Retour";

  constructor(
    private postService: PostService,
    private  activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {

    this.getPostById();
    console.log("post to display", this.post);
    this.getAuthorById(this.post);

  }


  getPostById(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const postToDisplay =  this.postService.getPostById(id);
    this.post = postToDisplay[0];
 }

 getAuthorById(post: IPost): void {
  const authorToDisplay = this.postService.getAuthorById(post);
  this.author = authorToDisplay;
 }

 goBack(){
  this.location.back();
}
}



