import { Component, OnInit } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { ButtonCatBOComponent } from '../../../components/backOffice/button-cat-bo/button-cat-bo.component';
import { PostFormComponent } from '../../../components/backOffice/post-form/post-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface ICategoryButton {
  id: number;
  title: string;
}


@Component({
  selector: 'app-backoffice-add',
  standalone: true,
  imports: [HeaderBoComponent, ButtonComponent, ButtonCatBOComponent,PostFormComponent],
  templateUrl: './backoffice-add.component.html',
  styleUrl: './backoffice-add.component.css'
})
export class BackofficeAddComponent implements OnInit {

  catForm!: FormGroup;
  isNewPost: boolean = true;
  post!: Post;
  categoriesButton: ICategoryButton[] = [
      {
        id: 1,
        title: "Litterature",
  
      },
      {
        id: 2,
        title: "Cinema",
  
      },
      {
        id: 3,
        title: "Citation",
      }
    ]
    

constructor(
  private activatedRoute : ActivatedRoute,
  private postService : PostService,
  private router : Router,
  private formBuilder: FormBuilder
){
  this.catForm = this.formBuilder.group({
    categorie: ['', [Validators.required]],
  });
 
}


  

  ngOnInit(): void {
    this.getPostDetails();
    this.checkIfIsNewPost();
  }

 
  // To get the post and send it to the form in order to patch value
  getPostDetails(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundPost = this.postService.getPostById(id);
    if(foundPost){
      this.post = foundPost[0];
    } else {
      this.router.navigate(['']);
    }
   
 
  }

  // Manage display of the content if this is a new post or a modification
  checkIfIsNewPost(): void {
    const url = this.router.url;
       if (url.includes('ajouter')) {
         this.isNewPost = true;
       } else {
         this.isNewPost = false;
       }
     }




}

