import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { AuthorService } from '../../../services/AuthorService/author.service';
import { Author } from '../../../models/author.model';
import { MediaService } from '../../../services/MediaService/media.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private authorService: AuthorService,
    private mediaService: MediaService,
    private router : Router

  ) { }

  @Input() post : Post | undefined;
  posts: Post[] = [];
  listOfAuthors: Author[] = [];
  listOfThemes : string [] = [];
  postForm!: FormGroup;
  selectedFile!: File | null;
  selectedFileUrl!: string | ArrayBuffer | null;
  imageUrl: string = '';
  isNewPost: boolean = true;



  ngOnInit(): void {
    this.buildForm();
    this.getAllPosts();
    this.getAllAuthors();
    this.getAllThemes();
    if (this.post) {
      this.getAuthorById();
      this.displayPost(this.post);
      this.imageUrl = this.post.picture;
    }
    this.checkIfIsNewPost();

  }

  buildForm(): void {
    this.postForm = this.formBuilder.group({
      auteur: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      theme: ['', [Validators.required]],
      publication: ['', [Validators.required, Validators.minLength(5)]],
      photo: [null, [Validators.required]],
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
      this.postForm.patchValue({ photo: file });
      this.imageUrl = '';
     
      // Afficher l'image sélectionnée
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFileUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
  
    }
  }

  checkIfIsNewPost(): void {
   const url = this.router.url;
      if (url.includes('ajouter')) {
        this.isNewPost = true;
      } else {
        this.isNewPost = false;
      }
    }
   


  getAllPosts(): void {
    this.posts = this.postService.getAllPosts();
  }

  getAllAuthors(): void {
    this.listOfAuthors = this.authorService.getAllAuthors();
  }

  getAllThemes(): void {
    this.listOfThemes = this.mediaService.getAllTheme();
}

getAuthorById() : string {
  if (!this.post){
    return "Pas d'auteur";
  } else {
  return this.authorService.getAuthorById(this.post?.author_id);
}
};

displayPost(post : Post): void {
  this.postForm.patchValue({
    auteur: this.getAuthorById(),
    titre: this.post?.title,
    theme: this.post?.theme,
    publication: this.post?.content,
    photo : this.post?.picture,
  });
}
}

