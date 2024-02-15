import { Injectable } from '@angular/core';
import { IMedia, MEDIAS } from '../../mocks/media.mock';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

books: IMedia[] = MEDIAS;

  getAllBooks(): IMedia[] {
    const myBooks = MEDIAS.filter((media: IMedia) => media.category === "book")
    this.books=myBooks;
    return this.books;
  }

  getOneBook(id: number) : IMedia {
    const book = MEDIAS.filter((media: IMedia) => media.id === id);
    return book[0];
  }
}
