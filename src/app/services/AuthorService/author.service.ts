import { Injectable } from '@angular/core';
import { Author } from '../../models/author.model';
import { AUTHORS } from '../../mocks/author.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }


  getAllAuthors(): Author[] {
    let myResult: Author[] = [];
    let authorListUnique = new Set();
    AUTHORS.filter(author => {
      const estUnique = !authorListUnique.has(author.name);
      authorListUnique.add(author.name);
      if (estUnique) {
        myResult.push(author);
      }
    })
    myResult = this.sortAuthor(myResult);
    return myResult;
  }


  sortAuthor(authors : Author[]) : Author[] {
   return authors.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name) ?1 : 0);
  }

  getAuthorById(id : number) : string {
    let authorsList = this.getAllAuthors();
    let foundAuthor! : Author | undefined;
    foundAuthor = authorsList.find((author) => author.id === id);
    return foundAuthor!.name; 
  }
}
