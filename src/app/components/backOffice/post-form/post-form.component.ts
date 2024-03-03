import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {

  list: string[] = ["A", "B", "C"];

  constructor(
    private formBuilder: FormBuilder,
    private postService : PostService
  ) { }


  postForm!: FormGroup;
  selectedFile!: File | null;
  selectedFileUrl!: string | ArrayBuffer | null;

 
  ngOnInit(): void {
    this.buildForm();
    this.getAllPosts();
    console.log("test");
  
  }

  buildForm(): void {
    this.postForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      titre: ['', Validators.required],
      categorie: ['', Validators.required],
      publication: ['', Validators.required, Validators.minLength(5)],
      photo: [null, Validators.required],
    })
  }


  onSubmit(): void {
    if (this.postForm.valid) {
      console.log("mon formulaire 1", this.postForm);
      this.postForm.reset();
      this.selectedFile = null; // Réinitialiser la sélection de fichier
      this.selectedFileUrl = null; // Réinitialiser l'URL de l'image
    } else {
      console.log("mon formulaire 2", this.postForm);
      console.log("formulaire non valide")
    }
  }

  // Methode pour afficher l'image selectionnée dans le formulaire
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.postForm.patchValue({ image: file });

      // Afficher l'image sélectionnée
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFileUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }


  getAllPosts(): void {
    let posts: Post[] = [];
    posts = this.postService.getAllPosts();
    console.log("tous mes posts", posts);

  }
}
