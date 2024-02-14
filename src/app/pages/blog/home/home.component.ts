import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { VerticalLineComponent } from '../../../components/vertical-line/vertical-line.component';
import { CardCategoryComponent } from '../../../components/card-category/card-category.component';
import { MediaService } from '../../../services/MediaService/media.service';
import { IMedia, MEDIAS } from '../../../mocks/media.mock';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterLink,VerticalLineComponent,CardCategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

books!: IMedia[];
lastBook! :IMedia;

constructor(
  private mediaService : MediaService
){}

ngOnInit(){
  this.getAllBooks();
  if (this.books){
    this.getLastPost(this.books);
    console.log("liste books",this.books);
  } else {
    this.getAllBooks;
    this.getLastPost(this.books);
  }

}

getAllBooks(): IMedia[] {
  return  this.books = this.mediaService.getAllBooks();
}

getLastPost(books: IMedia[]): void {
  const lastPost = books.sort((a,b) => (b.created_at)- (a.created_at));

}

}
