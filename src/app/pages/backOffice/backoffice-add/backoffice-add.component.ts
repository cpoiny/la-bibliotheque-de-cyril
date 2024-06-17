import { Component, OnInit } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { PostFormComponent } from '../../../components/backOffice/post-form/post-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-backoffice-add',
  standalone: true,
  imports: [HeaderBoComponent, PostFormComponent],
  templateUrl: './backoffice-add.component.html',
  styleUrl: './backoffice-add.component.css'
})
export class BackofficeAddComponent implements OnInit {

  post!: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.getPostDetails();
  }


  // To get the post and send it to the form in order to patch value
  getPostDetails(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe((data) => {
      if (data) {
        this.post = data;
      } else {
        this.router.navigate(['']);
      }
    }, (error: HttpErrorResponse) => {
      console.log("error", (error.error.detail));
    });
  }
}

