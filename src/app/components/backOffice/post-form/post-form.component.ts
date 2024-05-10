import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { AuthorService } from '../../../services/AuthorService/author.service';
import { Author } from '../../../models/author.model';
import { MediaService } from '../../../services/MediaService/media.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface ICategoryButton {
  id: number;
  title: string;
}


@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private authorService: AuthorService,
    private mediaService: MediaService,
    private router: Router,
  ) { }


  @Input() post: Post | undefined;
  //posts: Post[] = [];
  listOfAuthors: Author[] = [];
  listOfThemes: string[] = [];
  postForm!: FormGroup;
  selectedFile!: File | null;
  selectedFileUrl: string | ArrayBuffer | null = '';
  imageUrl: string = '';
  isEmptyImage?: boolean;
  isNewPost: boolean = true;

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



  ngOnInit(): void {
    this.checkIfNewPost();
    this.buildForm();
    this.getAllAuthors();
    this.getAllThemes();
    

  }

 
  ngOnChanges(changes: SimpleChanges) {
    if (changes['post'] && changes['post'].currentValue) {
      this.displayPost();
      this.imageUrl = this.post!.picture;
    }
  }

  buildForm(): void {
    this.postForm = this.formBuilder.group({
      auteur: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      theme: ['', [Validators.required]],
      publication: ['', [Validators.required, Validators.minLength(5)]],
      photo: [null, [Validators.required]],
      categorie: ['', [Validators.required]]
    })
  }


  onSubmit(): void {
    if (this.postForm.valid) {
      //this.postService.createPost(this.postForm);
      this.postForm.reset();
      this.selectedFile = null; // Réinitialiser la sélection de fichier
      this.selectedFileUrl = null; // Réinitialiser l'URL de l'image
      console.log("formulaire non valide", this.postForm.value);
    } else {

      console.log("formulaire non valide", this.postForm.value);
    }
  }

  // Methode pour afficher l'image selectionnée dans le formulaire
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedFile = file;
      this.postForm.patchValue({ image: file });
      this.imageUrl = '';
      this.isEmptyImage = false;

      // Afficher l'image sélectionnée
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFileUrl = reader.result as string;

      };
      reader.readAsDataURL(this.selectedFile);

    }
  }

  
// OK
  getAllAuthors(): void {
   this.authorService.getAllAuthors().subscribe((data) => {
    this.listOfAuthors = this.authorService.sortAuthor(data);
   });
  }

  // OK
  getAllThemes(): void {
    this.listOfThemes = this.mediaService.getAllTheme();
  }

  // je ne recupere pas l'image, ni la categorie
  displayPost(): void {
    console.log("patch value");
    this.postForm.patchValue({
      auteur: this.post!.authors![0].name,
      titre: this.post!.title,
      theme: this.post!.medias![0].theme,
      publication: this.post!.content,
      photo: this.post!.picture,
      categorie: this.post!.medias![0].category,
    });
  }

  // verification de l'url pour gérer l'affichage conditionnel
  checkIfNewPost(): void {
    const url = this.router.url;
    if (url.includes("ajouter")) {
      this.isEmptyImage = true;
      this.isNewPost = true;
    } else {
      this.isEmptyImage = false;
      this.isNewPost = false;
    }
  }

}


