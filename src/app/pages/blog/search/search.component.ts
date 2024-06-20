import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/blog/header/header.component';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { CardComponent } from '../../../components/card/card.component';
import { IPostSearched } from '../../../models/interfaces/user';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  postsFromresearch: Post[] = [];
  message? : string;
  searchTerm : string = '';

  constructor(
    private postService: PostService
  ){}


  ngOnInit() {
    this.postService.postsSearched.subscribe((results: IPostSearched) => {
      this.postsFromresearch = results.post;
      this.searchTerm = results.searchTerm;
      this.message =  this.postsFromresearch.length > 1 ?  `${this.postsFromresearch.length} résultats pour votre recherche.` : `1 résultat pour votre recherche. `;
    });
  }
  
  }


