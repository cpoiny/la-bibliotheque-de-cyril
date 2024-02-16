import { Injectable } from '@angular/core';
import { IPost, POSTS } from '../../mocks/posts.mock';
import { AUTHORS, IAuthor } from '../../mocks/author.mock';

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


getPostById(id : number) : IPost[] {
  const post = POSTS.filter((post) => post.id === id);
  return post;
}


getAuthorById(post: IPost): IAuthor {
    const id = post.author_id;
    const author = AUTHORS.filter((author) => author.id === id);
    return author[0];
}

}
