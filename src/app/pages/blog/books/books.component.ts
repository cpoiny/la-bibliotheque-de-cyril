import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { IPost } from '../../../mocks/posts.mock';
import { PostService } from '../../../services/PostService/post.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [HeaderComponent, RouterLink, PageHeaderComponent, BooksComponent, CardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

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
    console.log("voir mes livres",this.books);
  }

  

}
