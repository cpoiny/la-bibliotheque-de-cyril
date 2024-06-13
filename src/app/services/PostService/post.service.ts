import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponsePost } from '../../models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient){}

  public baseUrl = "http://localhost:8086/posts"


  /**
   * Returns all posts from API.
   * @returns An Observable that emits an array of Post objects.
   */
  getAllPosts(): Observable<Post[]> {
    return this.http.get<{ data: Post[] }>(this.baseUrl)
      .pipe(map(response => response.data));
  };


  /**
   * Returns a post by its ID from API.
   * @param id - The ID of the post to retrieve.
   * @returns An Observable that emits the retrieved post.
   */
  getPostById(id: number): Observable<Post> {
    const url = this.baseUrl + "/" + id;
    return this.http.get<{ data: Post }>(url)
      .pipe(map(response => response.data));
  };


  /**
   * Returns posts by category.
   * @param postsPublished - The array of published posts only.
   * @param category - The category to filter the posts by.
   * @returns An Observable that emits an array of posts filtered by the specified category.
   */
  getPostByCategory(postsPublished: Post[], category: string): Observable<Post[]> {
    return this.getAllPosts().pipe(
      map((posts: Post[]) => {
        if (posts) {
          if (category === "litterature") {
            return postsPublished.filter((post) => post.medias[0].category === "litterature");
          } else if (category === "cinema") {
            return postsPublished.filter((post) => post.medias[0].category === "cinema");
          } else {
            return postsPublished.filter((post) => post.medias[0].category === "citations");
          }
        } else {
          return [];
        }
      })
    );
  };


  /**
   * Creates a new post.
   * Sets of the headers with the token which is required by the API as a permission to create.
   * @param post The post object to be created.
   * @returns An Observable of ApiResponsePost.
   */
  createPost(post: Post): Observable<ApiResponsePost> {
    const url = this.baseUrl + "/ajouter";
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
    return this.http.post(url, post, { headers: headers }).pipe(map((data: any) => data as ApiResponsePost));
  };


  /**
   * Updates a post with the given ID.
   * Sets of the headers with the token which is required by the API as a permission to update.
   * @param post The updated post object.
   * @param id The ID of the post to update.
   * @returns An Observable of ApiResponsePost.
   */
  updatePost(post: Post, id: number): Observable<ApiResponsePost> {
    const url = this.baseUrl + "/modifier/" + id;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
    return this.http.put(url, post, { headers: headers }).pipe(map((data: any) => data as ApiResponsePost));
  };


  /**
   * Deletes a post with the specified ID.
   * Sets of the headers with the token which is required by the API as a permission to delete.
   * @param id - The ID of the post to delete.
   * @returns An Observable that emits an ApiResponsePost object.
   */
  deletePost(id: number): Observable<ApiResponsePost> {
    const url = this.baseUrl + '/' + id;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
    return this.http.delete(url, { headers: headers }).pipe(map((data: any) => data as ApiResponsePost));
  };

}