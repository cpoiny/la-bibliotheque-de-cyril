import { Component, OnInit } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { Post } from '../../../models/post.model';
import { PostService } from '../../../services/PostService/post.service';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { ActionsButtonComponent } from '../../../components/backOffice/actions-button/actions-button.component';
import { CardBoComponent } from '../../../components/backOffice/card-bo/card-bo.component';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { AuthenticationService } from '../../../services/Authentication/authentication.service';

@Component({
  selector: 'app-back-office-posts',
  standalone: true,
  imports: [HeaderBoComponent, CardBoComponent, RouterLink, ButtonComponent, ActionsButtonComponent, ModalComponent],
  templateUrl: './back-office-posts.component.html',
  styleUrl: './back-office-posts.component.css'
})
export class BackOfficePostsComponent implements OnInit {

  constructor(
    private postService: PostService,
    private authService: AuthenticationService
  ) { }

  ajouter: string = "Nouveau post";
  bookPosts: Post[] = [];
  moviePosts: Post[] = [];
  quotePosts: Post[] = [];
  srcEdit: string = "assets/icons/edit.png";
  srcDelete: string = "assets/icons/corbeille.png";
  isOpen: boolean = false;
  title: string = "";
  message: string = "";
  actionType: string = "";
  postToDelete?: Post;
  posts: Post[] = [];
  isAuthenticated = false;

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedIn();
    this.getAllPosts();
  }



  getAllPosts(): void {
    this.postService.getAllPosts().subscribe((data) => {
      let posts: Post[] = []
      posts = data;
      this.bookPosts = posts.filter((post) => post.medias[0].category === "litterature");
      this.moviePosts = posts.filter((post) => post.medias[0].category === "cinema");
      this.quotePosts = posts.filter((post) => post.medias[0].category === "citation");
    })
  }


  onEdit(post: Post): void {
    console.log("click edit", post);
  }

  onDelete(post: Post): void {
    this.postService.deletePost(post.id).subscribe(
      (data) => {
        window.location.reload();
      },
      (error) => {
        // Handle the error here
        console.log(error);
        alert(error.error.message);
      }
    );
  }

  openModal(post: Post, action: string) {
    this.isOpen = true;
    this.title = "Confirmation de suppression"
    this.message = `Etes-vous sûr de vouloir supprimer le post sur "${post.title}" ?`;
    this.actionType = action;
    this.postToDelete = post;
  }



  onModalClosed(result: string): void {
    if (result) {
      this.onDelete(this.postToDelete!);
    }
    this.isOpen = false;
  }
}
