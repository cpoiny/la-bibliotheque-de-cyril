import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/blog/header/header.component';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { CardComponent } from '../../../components/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  postsFromResearch: Post[] = [];
  message? : string;
  searchTerm : string = '';

  constructor(
    private postService: PostService,
    private activatedRoute : ActivatedRoute
  ){}


 ngOnInit() {
   let search = this.activatedRoute.snapshot.paramMap.get('search');
   this.postsFromResearch = this.postService.getResults(search!);
  
   this.postService.postsFromResearch.subscribe((results : Post[]) => {
      this.postsFromResearch = results;
      this.message = this.postsFromResearch.length > 1 ? `${this.postsFromResearch.length} résultats pour votre recherche.` : " 1 résultat pour votre recherche !"
  });
  
  }

  }

