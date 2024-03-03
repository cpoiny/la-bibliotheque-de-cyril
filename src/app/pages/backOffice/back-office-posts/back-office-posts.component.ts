import { Component, OnInit } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { CardComponent } from '../../../components/card/card.component';
import { Post } from '../../../models/post.model';
import { PostService } from '../../../services/PostService/post.service';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-back-office-posts',
  standalone: true,
  imports: [HeaderBoComponent, CardComponent, RouterLink, ButtonComponent],
  templateUrl: './back-office-posts.component.html',
  styleUrl: './back-office-posts.component.css'
})
export class BackOfficePostsComponent implements OnInit{

ajouter: string = "Nouvelle publication";

constructor (
  private postService: PostService,
){}

bookPosts : Post[] = [];
moviePosts : Post[] = [];
quotePosts : Post[] = [];

ngOnInit() : void {

this.getAllPosts();

}


getAllPosts() : void {
  
  let posts : Post[] = [];
  posts = this.postService.getAllPosts();
  this.bookPosts =  posts.filter((post)=> post.category === "book");
  this.moviePosts = posts.filter((post)=> post.category === "movie");
  this.quotePosts = posts.filter((post)=> post.category === "quote");
}

filterAllPosts() : void {
}
}
