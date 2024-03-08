import { Injectable } from '@angular/core';
import { POSTS } from '../../mocks/posts.mock';
import { AUTHORS } from '../../mocks/author.mock';
import { Post, PostAdapter } from '../../models/post.model';
import { Author } from '../../models/author.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private adapter: PostAdapter
  ) { }

  posts: Post[] = [];



  // version 2 --------------------------------------------------------------------------------------------------------------

  getAllPostsV2(): Observable<Post[]> {
    const url = "";
    return this.http.get(url).pipe(map((data: any) => data.map((item: any) => this.adapter.adapt(item))));
  }


 getPostByIdV2(id: number): Observable<Post> {
  const url = "" + "post/" + id;
  return this.http.get(url).pipe(map((data: any) => this.adapter.adapt(data)));
}

// ------------------------------------------------------------------------------------------------------------------------------------


  getAllPosts(): Post[] {
    return POSTS;
  }

  getPostById(id: number): Post[] {
    const post = POSTS.filter((post) => post.id === id);
    return post;
  }


  getPostByCategory(posts: Post[], category: string): Post[] {
    if (posts) {
      if (category === "litterature") {
        return posts.filter((post) => post.category === "litterature")
      } else if (category === "cinema") {
        return posts.filter((post) => post.category === "cinema")
      } else {
        return posts.filter((post) => post.category === "citation")
      }
    } else {
      return [];
    }

  }

  getAuthorById(post: Post): Author {
    const id = post.author_id;
    const author = AUTHORS.filter((author) => author.id === id);
    return author[0];
  }







}
