import { Component, OnInit } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { ButtonCatBOComponent } from '../../../components/backOffice/button-cat-bo/button-cat-bo.component';
import { PostFormComponent } from '../../../components/backOffice/post-form/post-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { FormBuilder } from '@angular/forms';

export interface ICategoryButton {
  id: number;
  title: string;
  icon: string;
}


@Component({
  selector: 'app-backoffice-add',
  standalone: true,
  imports: [HeaderBoComponent, ButtonComponent, ButtonCatBOComponent,PostFormComponent],
  templateUrl: './backoffice-add.component.html',
  styleUrl: './backoffice-add.component.css'
})
export class BackofficeAddComponent implements OnInit {

constructor(
  private activatedRoute : ActivatedRoute,
  private postService : PostService,
  private router : Router,
  private formBuilder : FormBuilder
){
  // this.formData = {
  //   auteur :"",
  //   titre : this.postToDisplay?.title,
  //   theme : "mon Theme",
  //   publication: this.postToDisplay?.content,
  //   photo: this.postToDisplay?.picture

  // }
}




  categoriesButton: ICategoryButton[] = [
    {
      id: 1,
      title: "Littérature",
      icon: "assets/icons/livre.png",
    },
    {
      id: 2,
      title: "Cinéma",
      icon: "assets/icons/clap.png",
    },
    {
      id: 3,
      title: "Citations",
      icon: "assets/icons/citation.png",
    }
  ]
  postToDisplay : Post | undefined;
  // formData : Post;

  ngOnInit(): void {
    this.getPostDetails();

  }

  getValueCategory() :void {
    console.log("checked", (document.getElementById("button.title") as HTMLInputElement).checked);
  }



  //fonction pour récupérer une todo par id
  getPostDetails() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log("id todo", id);
    const foundPost = this.postService.getPostById(id);

    if(foundPost){
      this.postToDisplay = foundPost[0];
    } else {
      this.router.navigate(['**']);
    }
    // this.displayPost(foundPost[0]);

 
  }


  // // //function display formulaire
  // displayPost(post: Post): void {
  //   this.postToDisplay = post;

    
  //   this.todoForm.patchValue({
  //     cat: this.todoDetails.category,
  //     todo: this.todoDetails.content,
  //     urgence: this.todoDetails.isUrgent,
  //   });
  // }

}

