import { Component, OnInit, Signal, signal } from '@angular/core';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { IPost } from '../../../mocks/posts.mock';
import { PostService } from '../../../services/PostService/post.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PageHeaderComponent, CardComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  books: IPost[] = [];


  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getAllPosts();
    this.getAllBooksPosts();

  }

  getAllPosts(): IPost[] {
    const posts = this.postService.getAllPosts();
    return posts;
  }

  getAllBooksPosts(): void {
    this.books = this.postService.getAllBooksPost();
  }

  


}
