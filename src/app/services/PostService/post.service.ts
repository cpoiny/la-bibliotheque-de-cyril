import { Injectable } from '@angular/core';
import { Post, PostAdapter } from '../../models/post.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  public baseUrl = "http://localhost:8086/posts"

 // OK
  getAllPosts(): Observable<Post[]> {
    return this.http.get<{ data: Post[] }>(this.baseUrl)
      .pipe(map(response => response.data));
  }


  getPostById(id: number): Observable<Post> {
    const url = this.baseUrl+ "/" + id;
    return this.http.get<{ data: Post }>(url)
    .pipe(map(response => response.data));
  }

  deletePost(id: number) : void {
    const url = this.baseUrl + '/' + id;
    this.http.delete<{ data: Post }>(url)
    .pipe(map(response => response.data));
  }

  getPostByCategory(postsPublished: Post[],category: string): Observable<Post[]> {
    return this.getAllPosts().pipe(
      map((posts: Post[]) => {
        if (posts) {
          if (category === "litterature") {
            return postsPublished.filter((post) => post.medias![0].category === "litterature");
          } else if (category === "cinema") {
            return postsPublished.filter((post) => post.medias![0].category === "cinema");
          } else {
            return postsPublished.filter((post) => post.medias![0].category === "citation");
          }
        } else {
          return [];
        }
      })
    );
  }

}










