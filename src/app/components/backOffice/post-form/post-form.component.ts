import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../models/author.model';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {

  posts: Post[] = [];
  listOfAuthors: Author[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private authorService: AuthorService,

  ) { }


  postForm!: FormGroup;
  selectedFile!: File | null;
  selectedFileUrl!: string | ArrayBuffer | null;


  ngOnInit(): void {
    this.buildForm();
    this.getAllPosts();
    console.log(this.getAllInfosForm());

  }

  buildForm(): void {
    this.postForm = this.formBuilder.group({
      auteur: ['', Validators.required],
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
    this.posts = this.postService.getAllPosts();
  }

  getAllInfosForm(): void {
    // recupérer les auteurs
    this.listOfAuthors = this.authorService.getAllAuthors();
    console.log("mes auteurs", this.listOfAuthors);
  }
}
