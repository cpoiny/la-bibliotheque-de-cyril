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

  postsFromResearch: Post[] = [];
  message? : string;
  searchTerm : string = '';

  constructor(
    private postService: PostService,
    private activatedRoute : ActivatedRoute
  ){}


 ngOnInit() {
  this.displayResearch();
  }

  displayResearch() : void {
    this.postService.searchTerm.subscribe((term : string) => {
      //let search = this.activatedRoute.snapshot.paramMap.get('search');
      this.postsFromResearch = this.postService.filterPosts2(term);
    });
    }

  }

