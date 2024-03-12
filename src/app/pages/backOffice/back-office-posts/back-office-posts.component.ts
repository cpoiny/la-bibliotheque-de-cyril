import { Component, OnInit } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { Post } from '../../../models/post.model';
import { PostService } from '../../../services/PostService/post.service';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { ActionsButtonComponent } from '../../../components/backOffice/actions-button/actions-button.component';
import { CardBoComponent } from '../../../components/backOffice/card-bo/card-bo.component';

@Component({
  selector: 'app-back-office-posts',
  standalone: true,
  imports: [HeaderBoComponent, CardBoComponent, RouterLink, ButtonComponent, ActionsButtonComponent],
  templateUrl: './back-office-posts.component.html',
  styleUrl: './back-office-posts.component.css'
})
export class BackOfficePostsComponent implements OnInit {

  constructor(
    private postService: PostService,
  ) { }

  ajouter: string = "Nouvelle publication";
  bookPosts: Post[] = [];
  moviePosts: Post[] = [];
  quotePosts: Post[] = [];
  srcEdit: string = "assets/icons/edit.png";
  srcDelete: string = "assets/icons/corbeille.png"

  ngOnInit(): void {

    this.getAllPosts();

  }


  getAllPosts(): void {

    let posts: Post[] = [];
    posts = this.postService.getAllPosts();
    this.bookPosts = posts.filter((post) => post.category === "litterature");
    this.moviePosts = posts.filter((post) => post.category === "cinema");
    this.quotePosts = posts.filter((post) => post.category === "citation");
  }


  onEdit(post: Post): void {
    console.log("click edit", post);
  }

  onDelete(post: Post): void {
    console.log("click delete", post);
    // open modale pour confirmer la suppression
    this.postService.deletePostById(post.id);
  }
}
