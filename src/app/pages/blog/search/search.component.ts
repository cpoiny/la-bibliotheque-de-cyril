import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/blog/header/header.component';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { CardComponent } from '../../../components/card/card.component';

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

  constructor(
    private postService: PostService
  ){}


  ngOnInit() {
    this.postService.postsSearched.subscribe((posts: Post[]) => {
      this.postsFromresearch = posts;
      this.message =  this.postsFromresearch.length > 1 ?  `${this.postsFromresearch.length} résultats pour la recherche de "value"` : "1 résultat pour la recherche de value";
    });
  }

}
