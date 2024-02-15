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

  getPostByCategory(posts: IPost[], category: string): IPost[] {
    if(posts) {
      if (category === "litterature") {
        return posts.filter((post)=> post.category === "book")
      } else if (category === "cinema") {
        return posts.filter((post)=> post.category === "movie")
      } else {
        return posts.filter((post)=> post.category === "quote")
      }
  } else {
    return [];
  }
}

}
