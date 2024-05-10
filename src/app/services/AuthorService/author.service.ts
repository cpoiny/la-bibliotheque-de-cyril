import { Injectable } from '@angular/core';
import { Author } from '../../models/author.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  public baseUrl = "http://localhost:8086/authors"


  getAllAuthors(): Observable<Author[]> {
    return this.http.get<{ data: Author[] }>(this.baseUrl)
    .pipe(map(response => response.data));
  }

  //   let myResult: Author[] = [];
  //   let authorListUnique = new Set();
  //   AUTHORS.filter(author => {
  //     const estUnique = !authorListUnique.has(author.name);
  //     authorListUnique.add(author.name);
  //     if (estUnique) {
  //       myResult.push(author);
  //     }
  //   })
  //   myResult = this.sortAuthor(myResult);
  //   return myResult;
  // }

  getAuthorById(id: number): Observable<Author> {
    const url = this.baseUrl+ "/" + id;
    return this.http.get<{ data: Author }>(url)
    .pipe(map(response => response.data));
  }

   sortAuthor(authors : Author[]) : Author[] {
    return authors.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name) ? 1 : 0);
   }


}
