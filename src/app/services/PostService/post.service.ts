import { Injectable, Signal } from '@angular/core';
import { IPost, POSTS } from '../../mocks/posts.mock';
import { MediaService } from '../MediaService/media.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  

  constructor() { }


  getAllPosts(): IPost[] {
    return POSTS;
  }

  getAllBooksPost() : IPost[]{
  return POSTS
  .filter((post: IPost)=> post.category === "book");
  }

}
