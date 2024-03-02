import { Component, OnInit } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { ButtonCatBOComponent } from '../../../components/backOffice/button-cat-bo/button-cat-bo.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

export interface ICategoryButton {
  id: number;
  title: string;
}


@Component({
  selector: 'app-backoffice-add',
  standalone: true,
  imports: [HeaderBoComponent, ButtonComponent, ButtonCatBOComponent, ReactiveFormsModule],
  templateUrl: './backoffice-add.component.html',
  styleUrl: './backoffice-add.component.css'
})
export class BackofficeAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }


  postForm!: FormGroup;
  selectedFile!: File | null;
  selectedFileUrl!: string | ArrayBuffer | null;

  categoriesButton: ICategoryButton[] = [
    {
      id: 1,
      title: "Littérature",
    },
    {
      id: 2,
      title: "Cinéma",
    },
    {
      id: 3,
      title: "Citations",
    }
  ]

  ngOnInit(): void {
    this.buildForm();

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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
    this.selectedFile = file;
    // this.postForm.get('photo')?.setValue(this.selectedFile);
    this.postForm.patchValue({ image: file });
    console.log("ma photo", this.selectedFile);

    // Afficher l'image sélectionnée
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedFileUrl = reader.result as string;
      console.log("test photo");
    };
    reader.readAsDataURL(this.selectedFile);
  }
}

}



