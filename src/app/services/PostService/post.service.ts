import { Injectable } from '@angular/core';
import { IPost, POSTS } from '../../mocks/posts.mock';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  posts!: IPost[];

  constructor() { }


  getAllPosts(): IPost[] {
    return POSTS;
  }
}
