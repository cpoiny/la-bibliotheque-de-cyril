import { Injectable } from '@angular/core';
import { POSTS } from '../../mocks/posts.mock';
import { AUTHORS} from '../../mocks/author.mock';
import { Post } from '../../models/post.model';
import { Author } from '../../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }


  getAllPosts(): Post[] {
    return POSTS;
  }

  getPostByCategory(posts: Post[], category: string): Post[] {
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


getPostById(id : number) : Post[] {
  const post = POSTS.filter((post) => post.id === id);
  return post;
}


getAuthorById(post: Post): Author {
    const id = post.author_id;
    const author = AUTHORS.filter((author) => author.id === id);
    return author[0];
}

}
