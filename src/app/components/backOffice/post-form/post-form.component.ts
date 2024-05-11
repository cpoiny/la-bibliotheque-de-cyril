import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { AuthorService } from '../../../services/AuthorService/author.service';
import { Author } from '../../../models/author.model';
import { MediaService } from '../../../services/MediaService/media.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Media } from '../../../models/media.model';

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
  listOfEditions?: string[] = [];
  postForm!: FormGroup;
  selectedFile!: File | null;
  selectedFileUrl: string | ArrayBuffer | null = '';
  selectedAuteurFile!: File | null;
  selectedAuteurFileUrl: string | ArrayBuffer | null = '';
  imageUrl: string = '';
  auteurImageUrl: string = '';
  isEmptyImage?: boolean;
  isEmptyImageAuteur?: boolean;
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
    this.loadFilters();

  }

 
  ngOnChanges(changes: SimpleChanges) {
    if (changes['post'] && changes['post'].currentValue) {
      this.displayPost();
    }
  }

  buildForm(): void {
    this.postForm = this.formBuilder.group({
      auteur: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      photoAuteur: [null, [Validators.required]],
      titre: ['', [Validators.required]],
      theme: ['', [Validators.required]],
      edition: ['', [Validators.required]],
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
      console.log("formulaire valide", this.postForm.valid);
    } else {

      console.log("formulaire non valide", this.postForm.value);
    }
  }

  //ok - Methode pour afficher l'image selectionnée dans le formulaire
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

    // ok -Methode pour afficher l'image de l'auteur selectionnée dans le formulaire
    onFileSelectedAuteur(event: any) {
      const file: File = event.target.files[0];
  
      if (file) {
        this.selectedAuteurFile = file;
        this.postForm.patchValue({ image: file });
        this.auteurImageUrl = '';
        this.isEmptyImageAuteur = false;
  
        // Afficher l'image sélectionnée
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedAuteurFileUrl = reader.result as string;
  
        };
        reader.readAsDataURL(this.selectedAuteurFile);
  
      }
    }

  
// OK
  getAllAuthors(): void {
   this.authorService.getAllAuthors().subscribe((data) => {
    this.listOfAuthors = this.authorService.sortAuthor(data);
   });
  }

  // OK
  loadFilters(): void {
   this.mediaService.getAllMedias().subscribe((data)=> {
    if(data){
      this.getAllThemes(data);
      this.getAllEditions(data);
    }
    });
  }

  // ok
  getAllThemes(data: Media[]): void {
    let themes: string[] = [];
    let mediaThemesUnique = new Set();
      data.filter(media => {
        const estUnique = !mediaThemesUnique.has(media.theme);
        mediaThemesUnique.add(media.theme);
        if(estUnique) {
          themes.push(media.theme)
        }
    })
    themes.sort((a,b) => a < b ? -1 : a > b ? 1 : 0);
  this.listOfThemes = themes;
  }

  //ok
  getAllEditions(data: Media[]): void {
    let editions: string[] =[];
    let mediaEditionsUnique = new Set();
      data.filter(media => {
        const estUnique = !mediaEditionsUnique.has(media.edition);
        mediaEditionsUnique.add(media.edition);
        if(estUnique) {
          editions!.push(media.edition!);
        }
    })
    editions!.sort((a,b) => a < b ? -1 : a > b ? 1 : 0);
  this.listOfEditions = editions;
  }

  // ok
  displayPost(): void {
    this.imageUrl = this.post!.picture;
    this.auteurImageUrl = this.post!.authors![0].picture;
    let titre = this.post!.title;
    this.postForm.patchValue({
      auteur: this.post!.authors![0].name,
      description : this.post!.authors[0].description,
     // photoAuteur: this.auteurImageUrl, me genere une erreur en le commantant ca fonctionne
      titre: titre,
      theme: this.post!.medias![0].theme,
      edition: this.post!.medias[0].edition,
      publication: this.post!.content,
      categorie: this.post!.medias![0].category,
      photo: this.imageUrl
    });
  }

  // ok -verification de l'url pour gérer l'affichage conditionnel
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


