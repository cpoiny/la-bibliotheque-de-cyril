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


  /**
   * Returns all authors from the API.
   * @returns An Observable that emits an array of Author objects.
   */
  getAllAuthors(): Observable<Author[]> {
    return this.http.get<{ data: Author[] }>(this.baseUrl)
      .pipe(map(response => response.data));
  };

  /**
   * Returns an author by its ID.
   * @param id - The ID of the author to retrieve.
   * @returns An Observable that emits the author object.
   */
  getAuthorById(id: number): Observable<Author> {
    const url = this.baseUrl + "/" + id;
    return this.http.get<{ data: Author }>(url)
      .pipe(map(response => response.data));
  };

  /**
   * Sorts an array of authors based on their names in ascending order.
   * @param authors - The array of authors to be sorted.
   * @returns The sorted array of authors.
   */
  sortAuthor(authors: Author[]): Author[] {
    return authors.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name) ? 1 : 0);
  };

}
