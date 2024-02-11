import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { ConfidentialiteComponent } from '../../pages/confidentialite/confidentialite.component';
import { CookiesComponent } from '../../pages/cookies/cookies.component';
import { ConditionsComponent } from '../../pages/conditions/conditions.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { cp } from 'node:fs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ButtonComponent, ConfidentialiteComponent, CookiesComponent, ConditionsComponent, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  // Propriété du bouton du formulaire
  title = "Envoyer";

  // Formulaire de contact
  formContact!: FormGroup;

  ngOnInit() {

    //Instanciation de mon formulaire
    this.formContact = new FormGroup({
      message: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")
      ])
    })

  }


  onSubmit() {
    console.log("mon formulaire", this.formContact);
  }


}
