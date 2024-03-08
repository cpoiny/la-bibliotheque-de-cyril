import { Component, OnInit } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { CardComponent } from '../../../components/card/card.component';
import { Post } from '../../../models/post.model';
import { PostService } from '../../../services/PostService/post.service';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../components/button/button.component';
import { ActionsButtonComponent } from '../../../components/backOffice/actions-button/actions-button.component';

@Component({
  selector: 'app-back-office-posts',
  standalone: true,
  imports: [HeaderBoComponent, CardComponent, RouterLink, ButtonComponent, ActionsButtonComponent],
  templateUrl: './back-office-posts.component.html',
  styleUrl: './back-office-posts.component.css'
})
export class BackOfficePostsComponent implements OnInit{

constructor (
  private postService: PostService,
){}

ajouter: string = "Nouvelle publication";
bookPosts : Post[] = [];
moviePosts : Post[] = [];
quotePosts : Post[] = [];
srcEdit : string = "assets/icons/edit.png";
srcDelete : string = "assets/icons/corbeille.png"

ngOnInit() : void {

this.getAllPosts();

}


getAllPosts() : void {
  
  let posts : Post[] = [];
  posts = this.postService.getAllPosts();
  this.bookPosts =  posts.filter((post)=> post.category === "litterature");
  this.moviePosts = posts.filter((post)=> post.category === "cinema");
  this.quotePosts = posts.filter((post)=> post.category === "citation");
}

filterAllPosts() : void {
}

onEdit(post: Post): void {
  console.log("click edit", post);

  // recupérer toutes les valeurs du formulaire dont nom ateur, theme du media (avec le media id) , 
}

onDelete(post: Post): void {
  console.log("click delete", post);
  // open modale pour confirmer la suppression

  // fonction delete by ID

}
}
