import { Injectable } from '@angular/core';
import { Post, PostAdapter } from '../../models/post.model';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponsePost } from '../../models/interfaces/user';

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

  // ok
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

  // ok
  getPostByCategory(postsPublished: Post[], category: string): Observable<Post[]> {
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

  
  // CREATE POST
  createPost(post : Post) : Observable<ApiResponsePost> {
    const url = this. baseUrl + "/ajouter";
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
    return this.http.post(url, post,{ headers: headers}).pipe(map((data: any) => data as ApiResponsePost));
  }

    // UPDATE POST
    updatePost(post : Post, id: number) : Observable<ApiResponsePost> {
      const url = this. baseUrl + "/modifier/" + id;
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
      return this.http.post(url, post,{ headers: headers}).pipe(map((data: any) => data as ApiResponsePost));
    }


}










