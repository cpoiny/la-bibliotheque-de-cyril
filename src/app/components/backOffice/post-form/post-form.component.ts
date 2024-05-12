import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { PostService } from '../../../services/PostService/post.service';
import { Post } from '../../../models/post.model';
import { AuthorService } from '../../../services/AuthorService/author.service';
import { Author } from '../../../models/author.model';
import { MediaService } from '../../../services/MediaService/media.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Media } from '../../../models/media.model';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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
    console.log("test on sumit)");
  }

  onCreate(): void {
    //   this.checkFormErrors(this.postForm);
    if (this.postForm.valid) {
      const postToCreate: Post = this.transformFormToPost();
      if (postToCreate) {
        console.log("post To create", postToCreate);
        this.postService.createPost(postToCreate).subscribe((data) => {
          console.log("data reposne creation de post", data);

          this.postForm.reset();
          this.selectedFile = null; // Réinitialiser la sélection de fichier
          this.selectedFileUrl = null; // Réinitialiser l'URL de l'image
          this.router.navigateByUrl('/admin-lbdc/toutes-les-publications')
        })
      }
    }
  }

  onUpdate(): void {
    this.postForm.controls['photoAuteur'].setValue(this.post!.authors[0].picture);
    if (this.postForm.valid) {
      const postToUpdate: Post = this.transformFormToPost();
      if (postToUpdate) {
        console.log("post To Update", postToUpdate);
        this.postService.updatePost(postToUpdate, postToUpdate.id).subscribe((data) => {
          this.postForm.reset();
          this.selectedFile = null; // Réinitialiser la sélection de fichier
          this.selectedFileUrl = null; // Réinitialiser l'URL de l'image
          this.router.navigateByUrl('/admin-lbdc/toutes-les-publications')
        }
        );
      }
    }
  }

  transformFormToPost(): Post {
    const post = this.postForm.value;
    const urlAuteur = post.photoAuteur;
    const urlPublication = post.photo;
    urlAuteur.replace("C:/fakepath/", "assets/img/auteur/");
    urlPublication.replace("C:/fakepath/", "assets/img/");
    const author: Author = new Author(
      this.post?.authors[0].id ? this.post.authors[0].id : 0,
      post.auteur,
      post.description,
      urlAuteur
    );
    const media: Media = new Media(
      this.post?.medias[0].id ? this.post.medias[0].id : 0,
      post.titre,
      post.categorie,
      post.theme,
      author.id,
      post.edition
    )
    const newPost: Post = new Post(
      this.post?.id ? this.post!.id : 0,
      post.titre,
      post.publication,
      urlPublication,
      this.post?.publicated_at ? this.post!.publicated_at : new Date,
      null,
      this.post?.is_draft ? this.post.is_draft : false,
      this.post?.quantity_comments ? this.post.quantity_comments : 0,
      this.post?.quantity_likes ? this.post.quantity_likes : 0,
      [author],
      [media]
    )
    return newPost;
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
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      const file: File = element.files[0];

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
  }


  // OK
  getAllAuthors(): void {
    this.authorService.getAllAuthors().subscribe((data) => {
      this.listOfAuthors = this.authorService.sortAuthor(data);
    });
  }

  // OK
  loadFilters(): void {
    this.mediaService.getAllMedias().subscribe((data) => {
      if (data) {
        this.getAllThemes(data);
        this.getAllEditions(data);
      }
    });
  }

  //
  getAllThemes(data: Media[]): void {
    let themes: string[] = [];
    let mediaThemesUnique = new Set();
    data.filter(media => {
      const estUnique = !mediaThemesUnique.has(media.theme);
      mediaThemesUnique.add(media.theme);
      if (estUnique) {
        themes.push(media.theme)
      }
    })
    themes.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    this.listOfThemes = themes;
  }

  //ok
  getAllEditions(data: Media[]): void {
    let editions: string[] = [];
    let mediaEditionsUnique = new Set();
    data.filter(media => {
      const estUnique = !mediaEditionsUnique.has(media.edition);
      mediaEditionsUnique.add(media.edition);
      if (estUnique) {
        editions!.push(media.edition!);
      }
    })
    editions!.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    this.listOfEditions = editions;
  }

  // ok
  displayPost(): void {
    this.imageUrl = this.post!.picture;
    this.auteurImageUrl = this.post!.authors[0].picture;
    this.postForm.patchValue({
      auteur: this.post!.authors[0].name,
      description: this.post!.authors[0].description,
      titre: this.post!.title,
      theme: this.post!.medias[0].theme,
      edition: this.post!.medias[0].edition,
      publication: this.post!.content,
      categorie: this.post!.medias[0].category,
      photo: this.imageUrl,
      photoAuteur: this.post!.authors[0].picture, 
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


