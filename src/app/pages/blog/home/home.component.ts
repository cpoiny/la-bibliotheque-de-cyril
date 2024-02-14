import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { VerticalLineComponent } from '../../../components/vertical-line/vertical-line.component';
import { CardCategoryComponent } from '../../../components/card-category/card-category.component';
import { MediaService } from '../../../services/MediaService/media.service';
import { PostService } from '../../../services/PostService/post.service';
import { IPost } from '../../../mocks/posts.mock';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterLink,VerticalLineComponent,CardCategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

posts!: IPost[];
lastPost! :IPost;

constructor(
  private postService: PostService
){}

ngOnInit(){
  this.getAllPosts();
  if (this.posts){
    this.getLastPost(this.posts);
  } else {
    this.getAllPosts;
    this.getLastPost(this.posts);
  }

}

getAllPosts(): IPost[] {
  return this.posts = this.postService.getAllPosts();
}

getLastPost(posts: IPost[]): void {
  const allPost = posts
  .sort((a,b) => (b.publication_date as any) - (a.publication_date as any));
  this.lastPost = allPost[0];
  console.log("lastPost", this.lastPost);
}

}
