import { Component, OnInit, Signal } from '@angular/core';
import { HeaderComponent } from '../../../components/blog/header/header.component';
import { RouterLink } from '@angular/router';
import { VerticalLineComponent } from '../../../components/vertical-line/vertical-line.component';
import { CardCategoryComponent } from '../../../components/blog/card-category/card-category.component';
import { PostService } from '../../../services/PostService/post.service';
import { SlicePipe } from '@angular/common';
import { Post } from '../../../models/post.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink, VerticalLineComponent, CardCategoryComponent, SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  posts!: Post[];
  lastPost?: Post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getAllPosts();

  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe((data) => {
      if (data) {
        this.posts = data;
        this.getLastPost(this.posts);
      }
    });
  }


  getLastPost(posts: Post[]): void {
    const allPost = posts.sort((a, b) => new Date(b.publicated_at).getTime() - new Date(a.publicated_at).getTime());
  this.lastPost = allPost[0];
  }


}
