import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/blog/header/header.component';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { CardComponent } from '../../../components/card/card.component';
import { ActivatedRoute } from '@angular/router';

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
    private postService: PostService,
    private activatedRoute :ActivatedRoute
  ){}


  ngOnInit() {
    this.postService.postsSearched.subscribe((posts: Post[]) => {
      this.postsFromresearch = posts;
      this.getSearchValue();
    });
  }

    ngOnChanges() {
      this.getSearchValue();

    }

    getSearchValue() : void {
      const search = this.activatedRoute.snapshot.paramMap.get('search');
      if (search) {
        this.searchTerm = search;
        this.message =  this.postsFromresearch.length > 1 ?  `${this.postsFromresearch.length} résultats pour la recherche de "${this.searchTerm}".` : `1 résultat pour la recherche de "${this.searchTerm}". `;
      }
    }
   
  }


