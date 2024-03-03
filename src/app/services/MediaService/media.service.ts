import { Injectable } from '@angular/core';
import { MEDIAS } from '../../mocks/media.mock';
import { Media } from '../../models/media.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

books: Media[] = MEDIAS;

  getAllBooks(): Media[] {
    const myBooks = MEDIAS.filter((media: Media) => media.category === "book")
    this.books = myBooks;
    return this.books;
  }

  getOneBook(id: number) : Media {
    const book = MEDIAS.filter((media: Media) => media.id === id);
    return book[0];
  }
}
