import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { IPost } from '../../../mocks/posts.mock';
import { PostService } from '../../../services/PostService/post.service';
import { CardComponent } from '../../../components/card/card.component';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { MediaService } from '../../../services/MediaService/media.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [HeaderComponent, RouterLink, PageHeaderComponent, BooksComponent, CardComponent, UpperCasePipe, DatePipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  books: IPost[] = [];
  // themesBook : string[] = [];


  constructor(
    private postService: PostService,
    private mediaService : MediaService
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
    // this.getThemeBook(this.books);
  }

  // getThemeBook(books: IPost[]): void {
  //   const arrayOfThemes : string[] = [];
  //   books.forEach((book)=> {
  //     const myBook = this.mediaService.getOneBook(book.media_id);
  //     arrayOfThemes.push(myBook.theme);
  //   })
  //   this.themesBook = arrayOfThemes; 
  // }  

  

}
