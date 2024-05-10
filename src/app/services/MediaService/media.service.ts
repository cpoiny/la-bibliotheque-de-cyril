import { Injectable } from '@angular/core';
import { MEDIAS } from '../../mocks/media.mock';
import { Media } from '../../models/media.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  
  
  books: Media[] = MEDIAS;
  constructor(private http: HttpClient) { }

  public baseUrl = "http://localhost:8086/medias";

  getAllMedias(): Observable<Media[]> {
    return this.http.get<{ data: Media[] }>(this.baseUrl)
    .pipe(map(response => response.data));
  }



  getAllBooks(): Media[] {
    const myBooks = MEDIAS.filter((media: Media) => media.category === "litterature")
    this.books = myBooks;
    return this.books;
  }

  getOneBook(id: number) : Media {
    const book = MEDIAS.filter((media: Media) => media.id === id);
    return book[0];
  }

  getAllTheme(): string[] {
    let themes: string[] = [];
    let mediaThemeUnique = new Set();
    this.getAllMedias().subscribe((data) => {
      data.filter(media => {
        const estUnique = !mediaThemeUnique.has(media.theme);
        mediaThemeUnique.add(media.theme);
        if(estUnique) {
          themes.push(media.theme)
        }
    })
    
    })
    themes.sort((a,b) => a < b ? -1 : a > b ? 1 : 0);
    return themes;
  }
}


